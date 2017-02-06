 #! /usr/bin/env node
var argv = require('argv');
var echo = require('../lib/index');
   console.log(echo(argv.join(' ')));
