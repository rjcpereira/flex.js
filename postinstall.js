const copy = require('gently-copy');

copy(['gulpfile.js', 'base'], process.env.INIT_CWD);