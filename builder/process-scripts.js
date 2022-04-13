const gulp = require('gulp'),
    babel = require('gulp-babel'),
    wrap = require('gulp-wrap'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

module.exports = ({ log, dest }) => {

    log('processing scripts');

    return () => gulp.src(['node_modules/flex.js-dev/core/js/**/*.js'])
        .pipe(wrap('(() => { <%= contents %> })();'))
        .pipe(concat(`site.js`))
        .pipe(wrap('window.flex = {}; (() => { <%= contents %> })();'))
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest(`${dest}/scripts`));
};