#!/usr/bin/env node
const program = require('caporal');
const createCommand = require('./lib/create.command');

program.version('0.0.0')
  .command('create', 'Create a new project')
  .argument('<template>', 'Template to use')
  .option('--variant <variant>', 'Which <variant> of the template is going to be created')
  .action(createCommand);

program.parse(process.argv);