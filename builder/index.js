const path = require('path'),
    fs = require('fs'),
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

const start = async (next, dev) => await require(`./server.start`)({
    log,
    next,
    url: 'http://localhost:3000',
    dev
});

console.log('\n\r');
log(`building project with ${name} v${pkg.version}`);
console.log('\n\r');

module.exports = {
    dev: async next => await build(() => start(next, true)),
    start,
    build
};