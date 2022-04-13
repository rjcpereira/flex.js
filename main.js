const fs = require('fs'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    colors = require('colors/safe'),
    colors = require('colors/safe');

const copyResources = () => {

};

!fs.existsSync('flex.js') && copyResources();
/* 
console.log(fs.existsSync('dev.js')) */

/* gulp.src('node/dev.js')
    .pipe(rename('cenas.js'))
    .pipe(gulp.dest('toma-la')) */

module.exports = () => {
    console.log(colors.green("hello"));
}