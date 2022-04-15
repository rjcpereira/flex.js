const build = {
    tasks: [
        'styles.parse',
        'scripts.parse',
        'views.parse',
        'layouts.parse',
        'routes.parse',
        'processed.templates',
        'api.parse',
        'middlewares.parse',
        'server.parse',
        'handlebars.copy',
        'assets.copy'
    ],
    dest: {
        server: 'dist',
        web: 'dist/web'
    }
};

const port = 3000;

const base = `http://localhost:${port}`;

const nodemon = {
    script: `./dist/server.js`,
    ext: 'js',
    env: {
        NODE_ENV: 'development',
        PORT: port
    },
    ignore: ['./node_modules/**'],
    delay: 2
};

const gulp = {
    watch: [
        'layouts/**/*',
        'pages/**/*',
        'styles/**/*',
        'views/**/*'
    ]
};

module.exports = {
    build,
    base,
    nodemon,
    gulp,
    port
};