var gentlyCopy = require('gently-copy')

var filesToCopy = ['files']

var userPath = process.env.INIT_CWD

gentlyCopy(filesToCopy, userPath)