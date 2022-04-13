const fs = require('fs'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    colors = require('colors/safe');

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

const log = (...args) => console.log(colors.green(`[${pkg.name}]`), ...args);

const modules = [
    'process-styles',
    'process-scripts'
].map(item => require(`./builder/${item}`));

const build = gulp.series(...modules.map(item => (() => item({
    log,
    dest: 'dist'
}))));

module.exports = {
    dev: async next => {
        log('dev');
        await next();
    },
    build
};