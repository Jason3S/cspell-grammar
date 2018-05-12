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
    .arguments('<file>')
    .action((file: string) => {
        colorizeFile(file, (line: string) => process.stdout.write(line + '\n')).then(
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
    .description('Analyze a file and output the scope selectors for each line.')
    .arguments('<file>')
    .action((file: string) => {
        analyse(file, (line: string) => process.stdout.write(line + '\n')).then(
            () => { process.exit(0); },
            (reason) => {
                console.log(reason);
                process.exit(1);
            }
        );
        showHelp = false;
    });

// program
//     .command('convert')
//     .description('Convert pList')
//     .arguments('<tmLanguage>')
//     .action((grammar: string) => {
//         pListToJson(grammar).then(text => console.log(text));
//         showHelp = false;
//     });

program.parse(process.argv);

if (showHelp) {
    program.help();
}
