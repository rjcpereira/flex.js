const config = require('./config'),
    express = require('express'),
    colors = require('colors'),
    server = express();

console.log(colors.red(config));

//const use = (req, res, next) => server.use(req, res, next);

server.get('/dev', (req, res) => res.send({
    id: 'flex.js'
}));

server.use(express.static(config.build.dest.web));

const line = () => console.log('\n\r');

server.listen(config.port, () => {
    line();
    console.log(colors.green('[flex.js]'), colors.yellow(config.base));
    line();
});