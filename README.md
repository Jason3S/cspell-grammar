# cspell-grammar
tmLanguage Grammar parser for cSpell

An interpreter for grammar files as defined by TextMate with the purpose of spell checking.
This is a pure JavaScript implementation of the interpreter. Due to the limitations of the
JavaScript regex engine, it only supports a subset of the [TextMate Language Grammar Definition](https://macromates.com/manual/en/language_grammars).

[Vscode-textmate](https://github.com/microsoft/vscode-textmate) provides more extensive support with the [Oniguruma](https://github.com/kkos/oniguruma) regex engine. Due to portability reasons, Cspell does not use vscode-textmate or Oniguruma.

The intent is to leverage a well defined grammar to help with the spell checking process.

The idea is to use the grammar to pull out important elements like:
* comments
* strings
* imports
* identifiers
* code blocks

That way it is possible to have strings in French, comments and variables in English while ignoring everything else.
