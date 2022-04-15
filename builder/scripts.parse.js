const config = require('./config'),
    gulp = require('gulp'),
    babel = require('gulp-babel'),
    wrap = require('gulp-wrap'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

module.exports = () => gulp.src(['node_modules/flex-kit/core/js/**/*.js'])
    .pipe(wrap('(() => { <%= contents %> })();'))
    .pipe(concat(`site.js`))
    .pipe(wrap('window.flex = {}; (() => { <%= contents %> })();'))
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(`${config.build.dest.web}/scripts`));