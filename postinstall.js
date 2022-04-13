const copy = require('gently-copy');

copy('base/*', process.env.INIT_CWD, {
    overwrite: true
});