const path = require('path'),
    fs = require('fs'),
    nodemon = require('nodemon'),
    gulp = require('gulp'),
    colors = require('colors/safe'),
    shell = require('child_process').exec;

const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf-8'));

const name = pkg.description;

const log = (...args) => console.log(colors.green(`[${name}]`), ...args);

const build = gulp.series(...[
    'styles.parse',
    'scripts.parse',
    'routes.parse',
    'views.parse',
    'api.parse',
    'middlewares.parse',
    'server.parse',
    'handlebars.copy',
    'assets.copy'
].map(id => {
    const task = require(`./${id}`);
    gulp.task(id, next => task({
        log,
        dest: 'dist',
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
log(`building project with ${name} v${pkg.version}`);
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