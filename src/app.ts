#!/usr/bin/env node --harmony_regexp_lookbehind

import * as path from 'path';
import * as program from 'commander';
import { colorizeFile } from './application';
const npmPackage = require(path.join(__dirname, '..', 'package.json'));

let showHelp = true;

program
    .version(npmPackage.version)
    .description('Spelling Checker for Code')
    ;

program
    .option('--no-color', 'Turn off color.')
    .option('--color', 'Force color');

program
    .command('colorize')
    .description('Colorize a file')
    .arguments('<grammar> <file>')
    .action((grammar: string, file: string) => {
        colorizeFile(grammar, file, (line: string) => process.stdout.write(line)).then(
            () => { process.exit(0); },
            (reason) => {
                console.log(reason);
                process.exit(1);
            }
        );
        showHelp = false;
    });


program.parse(process.argv);

if (showHelp) {
    program.help();
}
