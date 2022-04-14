const server = require('flex.js-dev/core/server');

module.exports = ({ log }) => {

    log('starting server');

    return server.listen();
}