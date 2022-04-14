const fs = require('fs'),
shell = require('child_process').exec;

module.exports = ({ next }) => shell(`handlebars layouts/base.hbs -f ./dist/scripts/templates.js`, next);