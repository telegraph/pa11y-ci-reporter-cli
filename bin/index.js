#!/usr/bin/env node
'use strict';

const displaySummary = require('../main');
const program = require('commander');
const version = require('../package.json').version;

program.version(version)
    .option('-s, --source <file>', 'the path to the pa11y-ci JSON input file', './pa11y-ci-results.json')
    .parse(process.argv);

const exitCode = displaySummary(program.source);
process.exit(exitCode);
