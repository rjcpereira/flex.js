const gulp = require('gulp'),
    uglify = require('gulp-uglify');

module.exports = ({ log, dest }) => {

    log('processing server');

    return gulp.src(['node_modules/flex.js-dev/core/server.js'])
        .pipe(uglify())
        .pipe(gulp.dest(`${dest}/scripts`));
};