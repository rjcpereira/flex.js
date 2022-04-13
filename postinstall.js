const fs = require('fs'),
    copy = require('gently-copy'),
    colors = require('colors/safe');

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

const { version, name, description } = pkg;

log = (...args) => console.log(colors.green(`[${name}]`), ...args);

log(`installing ${description} v${version}`);

copy(['base'], process.env.INIT_CWD);

log(`add scripts`, process.env.INIT_CWD);

fs.writeFileSync(__dirname + '/aa.json', pkg);

log(pkg)