const shell = require('child_process').exec,
    colors = require('colors/safe');

module.exports = ({ dev, log, url, next }) => {

    log(`starting server in '${colors.cyan(!dev ? 'production' : 'development')}' mode`, colors.brightGreen(url));

    return shell(`node${!dev ? '' : 'mon'} dist/server`, err => {
        log(colors.red('ERROR'), err);
        next();
    });
}