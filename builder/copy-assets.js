const copy = require('gently-copy');

module.exports = ({ dest, next }) => {

    copy(['assets'], `${process.env.INIT_CWD}/dist`, {
        overwrite: true
    });

    next();
};