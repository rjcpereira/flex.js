const fs = require('fs');
const { log, folders } = require('./utils');

module.exports = ({ next, layouts, compile }) => {

    log('layouts', layouts);

    const render = compile(layouts.base.file);

    const main = {
        '@route': {
            path: '',
            params: {}
        },
        '@url': 'http://localhost:3000'
    };
    
    const body = render({
        ...main,
        title: 'Title',
        description: 'Description',
        menu: {
            items: [
                { url: '/', title: 'Home' },
                { url: '/about', title: 'About' }
            ]
        },
        highlights: {
            world: [
                { title: 'First World Article', body: '<span style="font-style:italic;">First world article content</span>' }
            ],
            tech: [
                { title: 'Last Tech Article', body: 'Last tect article content' },
                { title: 'First Tech Article', body: 'First tect article content <pre>with the pre element</pre>' }
            ]
        }
    });

    const html = `<!DOCTYPE html><html><head></head><body>${body}</body></html>`;
    
    fs.writeFileSync('dist/web/index.html', html);

    //folders('pages', (item, path) => console.log(item, path))

    next();
};