const express = require('express'),
    colors = require('colors');

const server = express();

const port = 3000;

//const use = (req, res, next) => server.use(req, res, next);

server.get('/dev', (req, res) => res.send({
    id: 'flex.js'
}));

server.use(express.static('dist/web'));

const line = () => console.log('\n\r');

server.listen(port, () => {
    line();
    console.log(colors.green('[flex.js]'), colors.yellow(`http://localhost:${port}`));
    line();
});