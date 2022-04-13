const gulp = require('gulp'),
    rename = require('gulp-rename'),
    colors = require('colors/safe');

module.exports = () => {
    console.log(colors.green("hello"));
    return {
        dev() {
            gulp.src('base/dev.js')
            .pipe(rename('cenas.js'))
            .pipe(gulp.dest('toma-la'))
        }
    }
}