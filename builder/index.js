const nodemon = require('nodemon'),
    handlebars = require('handlebars'),
    gulp = require('gulp'),
    colors = require('colors/safe'),
    shell = require('child_process').exec;

const { log, pkg } = require('./utils');

const renderer = {
    views: value => handlebars.registerPartial(value.key, value.file),
    helper: (key, next) => handlebars.registerHelper(key, next),
    layouts: {}
};

let options = {
    dest: 'dist',
    compile: template => handlebars.compile(template)
};

for(let key in renderer) options[key] = new Proxy(typeof renderer[key] !== 'object' ? {} : renderer[key], {
    get(target, prop) {
        return target[prop];
    },
    set(target, prop, value) {
        target[prop] = value;
        typeof renderer[key] === 'function' && renderer[key](value);
        console.log(colors.cyan(key), colors.yellow(prop), value)
        return true;
    }
});

const build = gulp.series(...[
    'styles.parse',
    'scripts.parse',
    'views.parse',
    'layouts.parse',
    'routes.parse',
    'api.parse',
    'middlewares.parse',
    'server.parse',
    'handlebars.copy',
    'assets.copy'
].map(id => {
    const task = require(`./${id}`);
    gulp.task(id, next => task({
        ...options,
        next
    }));
    return id;
}));

const line = () => console.log('\n\r'),
    listening = dev => {
        line();
        log(`starting server in '${colors.cyan(!dev ? 'production' : 'development')}' mode`);
        line();
        log(colors.yellow('http://localhost:3000'));
        line();
    },
    watching = next => {
        listening();
        log('watching files for changes...');
        line();
        return (next && next());
    };

const start = async next => {

    listening();

    shell(`node dist/server`, err => {
        line();
        log(colors.red('ERROR'), err);
        line();
        next();
    });
};

line();
log(`building project with ${pkg.description} v${pkg.version}`);
line();

const watch = async () => {
    gulp.series(build, watching, () => nodemon({
        script: `./dist/server.js`,
        ext: 'js',
        env: {
            NODE_ENV: 'development',
            PORT: 3000
        },
        ignore: ['./node_modules/**'],
        delay: 2
    }))();
    return gulp.watch([
        'layouts/**/*',
        'pages/**/*',
        'styles/**/*',
        'views/**/*'
    ], gulp.series(build, watching));
};

module.exports = {
    start,
    build,
    watch,
    dev: watch
};