const fs = require('fs'),
    copy = require('gently-copy'),
    colors = require('colors/safe');

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

const { version, name, description } = pkg;

const dirs = {
    src: process.env.INIT_CWD
};

log = (...args) => console.log(colors.green(`[${name}]`), ...args);

log(`installing ${description} v${version}`);

copy(['base'], dirs.src);