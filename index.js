const fs = require('fs'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    colors = require('colors/safe');

    console.log('INDEX')
    console.log('INDEX')
    console.log('INDEX')
    console.log('INDEX')
    console.log('INDEX')
    console.log('INDEX')
    console.log('INDEX')

const copyResources = () => {
    console.log(colors.green("copyResources"));
    gulp.src('node_modules/flex.js-dev/dev.js')
        .pipe(rename('foo.js'))
        .pipe(gulp.dest(''))
};

copyResources();
/* 
console.log(fs.existsSync('dev.js')) */

/* gulp.src('node/dev.js')
    .pipe(rename('cenas.js'))
    .pipe(gulp.dest('toma-la')) */

module.exports = () => {
    console.log(colors.green("hello"));
}