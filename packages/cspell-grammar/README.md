# Grammar Parser
tmLanguage Grammar parser for cSpell

**WIP** -- This is a *Work In Progress*

This language parser support tmLanguage style grammars.

## Notes

- Works ONLY with Node 8 and above or Javascript engines that support RegExp look back.
- Most tmLanguage grammars use RegExp based upon Oniguruma engine. This grammar engine attempts to
simulate the features of Oniguruma, but it may fail. At the grammar engine's core, XRegExp is used.
So any limitations in XRegExp are also limitations in the grammar.
  - `\A`, `\G`, `\Z`, `\z` flags are simulated in a best attempt, but it is not possible to get them
exactly right.
