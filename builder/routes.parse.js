const { log, folders } = require('./utils');

module.exports = ({ next, layouts, compile }) => {

    log('layouts', layouts);

    const render = compile(layouts.base.file);

    console.log(render({
        title: 'Title',
        description: 'Description'
    }))
    
    //folders('pages', (item, path) => console.log(item, path))

    next();
};