const fs = require('fs'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    colors = require('colors/safe');

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

const log = (...args) => console.log(colors.green(`[${pkg.name}]`), ...args);

module.exports = {
    dev(next) {
        log('dev')
        return next();
    },
    build(next) {
        log('dev')
        return next();
    }
};


/* 
console.log(colors.green("hello"));
return {
dev() {
gulp.src('base/dev.js')
.pipe(rename('cenas.js'))
.pipe(gulp.dest('toma-la'))
}
} */