const config = require('./config'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify');

module.exports = () => gulp.src(['node_modules/flex-kit/core/server.js'])
    .pipe(uglify())
    .pipe(gulp.dest(config.build.dest.server));