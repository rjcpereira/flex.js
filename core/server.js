const express = require('express');

const server = express();

const port = 3000;

const listen = () => server.listen(port, () => console.log(`listening on port ${port}`));

const use = (req, res, next) => server.use(req, res, next);

module.exports = {
    listen,
    use
}