const copy = require('gently-copy');

copy(['.gitignore', 'base/*'], process.env.INIT_CWD, {
    overwrite: true
});