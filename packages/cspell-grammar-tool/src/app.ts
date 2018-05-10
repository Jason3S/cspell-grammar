#!/usr/bin/env node

import * as path from 'path';
import * as program from 'commander';
import { colorizeFile, analyse } from './application';
const npmPackage = require(path.join(__dirname, '..', 'package.json'));

let showHelp = true;

program
    .version(npmPackage.version)
    .description('Grammar parser for cspell.')
    ;

program
    .option('--no-color', 'Turn off color.')
    .option('--color', 'Force color');

program
    .command('colorize')
    .description('Colorize a file')
    .arguments('<grammar> <file>')
    .action((grammar: string, file: string) => {
        colorizeFile(grammar, file, (line: string) => process.stdout.write(line + '\n')).then(
            () => { process.exit(0); },
            (reason) => {
                console.log(reason);
                process.exit(1);
            }
        );
        showHelp = false;
    });

program
    .command('analyze')
    .description('Colorize a file')
    .arguments('<grammar> <file>')
    .action((grammar: string, file: string) => {
        analyse(grammar, file, (line: string) => process.stdout.write(line + '\n')).then(
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
