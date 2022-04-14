const fs = require('fs'),
    gulp = require('gulp'),
    colors = require('colors/safe'),
    shell = require('child_process').exec;

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

const log = (...args) => console.log(colors.green(`[${pkg.name}]`), ...args);

const build = gulp.series(...[
    'process-styles',
    'process-scripts',
    'process-server',
    'copy-handlebars',
    'copy-assets'
].map(id => {
    const task = require(`./${id}`);
    gulp.task(id, next => {
        log(id);
        return task({
            log,
            dest: 'dist',
            next
        });
    });
    return id;
}));

const start = async (next, dev) => await require(`./start-server`)({
    log,
    next,
    url: 'http://localhost:3000',
    dev
});

module.exports = {
    dev: async next => await build(() => start(next, true)),
    start,
    build
};