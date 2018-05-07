"use strict";

const path = require("path");
const program = require("commander");
const npmPackage = require(path.join(__dirname, '..', 'package.json'));
const application_1 = require("./application");
const App = require("./application");
const chalk_1 = require("chalk");

const param = {
    one: 55,
    two: 66,
    4: 'four',
};

// interface InitOptions extends Options {}
function issueEmitter(issue) {
    const { uri = '', row, col, text } = issue;
    console.log(`${chalk_1.default.green(uri)}[${row}, ${col}]: Unknown word: ${chalk_1.default.red(text)}`);
}
function issueEmitterWordsOnly(issue) {
    const { text } = issue;
    console.log(text);
}
function errorEmitter(message, error) {
    console.error(chalk_1.default.red(message), error);
    return Promise.resolve();
}
function infoEmitter(message) {
    console.info(chalk_1.default.yellow(message));
}
function debugEmitter(message) {
    console.info(chalk_1.default.cyan(message));
}
function nullEmitter(_) { }
let showHelp = true;
program
    .version(npmPackage.version)
    .description('Spelling Checker for Code');
program
    .option('-c, --config <cspell.json>', 'Configuration file to use.  By default cspell looks for cspell.json in the current directory.')
    .option('-v, --verbose', 'display more information about the files being checked and the configuration')
    .option('--local <local>', 'Set language locals. i.e. "en,fr" for English and French, or "en-GB" for British English.')
    .option('--wordsOnly', 'Only output the words not found in the dictionaries.')
    .option('-u, --unique', 'Only output the first instance of a word not found in the dictionaries.')
    .option('--debug', 'Output information useful for debugging cspell.json files.')
    .option('-e, --exclude <glob>', 'Exclude files matching the glob pattern')
    .option('--no-color', 'Turn off color.')
    .option('--color', 'Force color')
    .arguments('<files...>')
    .action((files, options) => {
    const emitters = {
        issue: options.wordsOnly ? issueEmitterWordsOnly : issueEmitter,
        error: errorEmitter,
        info: options.verbose ? infoEmitter : nullEmitter,
        debug: options.debug ? debugEmitter : nullEmitter,
    };
    showHelp = false;
    App.lint(files, options, emitters).then(result => {
        console.error('CSpell: Files checked: %d, Issues found: %d in %d files', result.files, result.issues, result.filesWithIssues.size);
        process.exit(result.issues ? 1 : 0);
    }, (error) => {
        console.error(error.message);
        process.exit(1);
    });
});
program
    .command('trace')
    .description('Trace words')
    .arguments('<words...>')
    .option('-c, --config <cspell.json>', 'Configuration file to use.  By default cspell looks for cspell.json in the current directory.')
    .option('--no-color', 'Turn off color.')
    .option('--color', 'Force color')
    .action((words, options) => {
    showHelp = false;
    App.trace(words, options).then(result => {
        result.forEach(emitTraceResult);
        process.exit(0);
    }, (error) => {
        console.error(error.message);
        process.exit(1);
    });
});
program
    .command('check')
    .description('Spell check file(s) and display the result. The full file is displayed in color.')
    .arguments('<files...>')
    .option('-c, --config <cspell.json>', 'Configuration file to use.  By default cspell looks for cspell.json in the current directory.')
    .option('--no-color', 'Turn off color.')
    .option('--color', 'Force color')
    .action(async (files, options) => {
    showHelp = false;
    for (const filename of files) {
        console.log(chalk_1.default.yellowBright(`Check file: ${filename}`));
        console.log();
        try {
            const result = await application_1.checkText(filename, options);
            for (const item of result.items) {
                const fn = item.flagIE === App.IncludeExcludeFlag.EXCLUDE
                    ? chalk_1.default.gray
                    : item.isError ? chalk_1.default.red : chalk_1.default.whiteBright;
                const t = fn(item.text);
                process.stdout.write(t);
            }
            console.log();
        }
        catch (e) {
            console.error(`Failed to read "${filename}"`);
        }
        console.log();
    }
    process.exit(0);
});

program.parse(process.argv);
if (showHelp) {
    program.help();
}
function emitTraceResult(r) {
    const terminalWidth = process.stdout.columns || 120;
    const widthName = 20;
    const w = chalk_1.default.green(r.word);
    const f = r.found
        ? chalk_1.default.whiteBright('*')
        : chalk_1.default.dim('-');
    const n = chalk_1.default.yellowBright(pad(r.dictName, widthName));
    const used = [r.word.length, 1, widthName].reduce((a, b) => a + b, 3);
    const widthSrc = terminalWidth - used;
    const s = chalk_1.default.white(trimMid(r.dictSource, widthSrc));
    const line = [w, f, n, s].join(' ');
    console.log(line);
}
function pad(s, w) {
    return (s + ' '.repeat(w)).substr(0, w);
}
function trimMid(s, w) {
    if (s.length <= w) {
        return s;
    }
    const l = Math.floor((w - 3) / 2);
    const r = Math.ceil((w - 3) / 2);
    return s.substr(0, l) + '...' + s.substr(-r);
}
//# sourceMappingURL=app.js.map