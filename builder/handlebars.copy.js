const gulp = require('gulp'),
    rename = require('gulp-rename');

module.exports = ({ dest }) => gulp.src(['node_modules/handlebars/dist/handlebars.runtime.min.js'])
    .pipe(rename('handlebars.js'))
    .pipe(gulp.dest(`${dest}/scripts`));