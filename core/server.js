const express = require('express');

const server = express();

const port = 3000;

const use = (req, res, next) => server.use(req, res, next);

server.use((req, res) => res.send({
    id: 'flex.js'
}));

server.use(express.static('/dist'));

server.listen(port, () => console.log(`listening on port ${port}`));