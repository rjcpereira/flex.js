const path = require('path'),
    fs = require('fs'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    colors = require('colors/safe');

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

const { version, name, description } = pkg;

log = (...args) => console.log(colors.green(`[${name}]`), ...args);

log(`installing ${description} v${version}`);

console.log(__dirname);

const dir = val => `node_modules/flex.js-dev/${val}`;

const copyResources = () => {
    log("copyResources");
    gulp.src(dir('dev.js'))
        .pipe(rename('foo.js'))
        .pipe(gulp.dest('/'))
};

copyResources();