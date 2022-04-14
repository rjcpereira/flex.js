const copy = require('gently-copy');

module.exports = ({ next }) => {

    copy(['assets'], `${process.env.INIT_CWD}/dist/web`, {
        overwrite: true
    });

    next();
};