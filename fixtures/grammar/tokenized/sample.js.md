# sample.js

**1:** ```"use strict";```

| text | scope |
| -- | -- |
| ``` " ``` | source.js string.quoted.double.js punctuation.definition.string.begin.js |
| ``` use strict ``` | source.js string.quoted.double.js |
| ``` " ``` | source.js string.quoted.double.js punctuation.definition.string.end.js |
| ``` ; ``` | source.js punctuation.terminator.statement.js |

**2:** *blank line*

**3:** ```const path = require("path");```

| text | scope |
| -- | -- |
| ``` const ``` | source.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.var.expr.js |
| ``` path ``` | source.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.var.expr.js |
| ``` require ``` | source.js meta.var.expr.js meta.function-call.js support.function.js |
| ``` ( ``` | source.js meta.var.expr.js meta.brace.round.js |
| ``` " ``` | source.js meta.var.expr.js string.quoted.double.js punctuation.definition.string.begin.js |
| ``` path ``` | source.js meta.var.expr.js string.quoted.double.js |
| ``` " ``` | source.js meta.var.expr.js string.quoted.double.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.var.expr.js meta.brace.round.js |
| ``` ; ``` | source.js punctuation.terminator.statement.js |

**4:** ```const program = require("commander");```

| text | scope |
| -- | -- |
| ``` const ``` | source.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.var.expr.js |
| ``` program ``` | source.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.var.expr.js |
| ``` require ``` | source.js meta.var.expr.js meta.function-call.js support.function.js |
| ``` ( ``` | source.js meta.var.expr.js meta.brace.round.js |
| ``` " ``` | source.js meta.var.expr.js string.quoted.double.js punctuation.definition.string.begin.js |
| ``` commander ``` | source.js meta.var.expr.js string.quoted.double.js |
| ``` " ``` | source.js meta.var.expr.js string.quoted.double.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.var.expr.js meta.brace.round.js |
| ``` ; ``` | source.js punctuation.terminator.statement.js |

**5:** ```const npmPackage = require(path.join(__dirname, '..', 'package.json'));```

| text | scope |
| -- | -- |
| ``` const ``` | source.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.var.expr.js |
| ``` npmPackage ``` | source.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.var.expr.js |
| ``` require ``` | source.js meta.var.expr.js meta.function-call.js support.function.js |
| ``` ( ``` | source.js meta.var.expr.js meta.brace.round.js |
| ``` path ``` | source.js meta.var.expr.js meta.function-call.js variable.other.object.js |
| ``` . ``` | source.js meta.var.expr.js meta.function-call.js punctuation.accessor.js |
| ``` join ``` | source.js meta.var.expr.js meta.function-call.js support.function.js |
| ``` ( ``` | source.js meta.var.expr.js meta.brace.round.js |
| ``` __dirname ``` | source.js meta.var.expr.js support.variable.object.node.js |
| ``` , ``` | source.js meta.var.expr.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.var.expr.js |
| ``` ' ``` | source.js meta.var.expr.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` .. ``` | source.js meta.var.expr.js string.quoted.single.js |
| ``` ' ``` | source.js meta.var.expr.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` , ``` | source.js meta.var.expr.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.var.expr.js |
| ``` ' ``` | source.js meta.var.expr.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` package.json ``` | source.js meta.var.expr.js string.quoted.single.js |
| ``` ' ``` | source.js meta.var.expr.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.var.expr.js meta.brace.round.js |
| ``` ) ``` | source.js meta.var.expr.js meta.brace.round.js |
| ``` ; ``` | source.js punctuation.terminator.statement.js |

**6:** ```const application_1 = require("./application");```

| text | scope |
| -- | -- |
| ``` const ``` | source.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.var.expr.js |
| ``` application_1 ``` | source.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.var.expr.js |
| ``` require ``` | source.js meta.var.expr.js meta.function-call.js support.function.js |
| ``` ( ``` | source.js meta.var.expr.js meta.brace.round.js |
| ``` " ``` | source.js meta.var.expr.js string.quoted.double.js punctuation.definition.string.begin.js |
| ``` ./application ``` | source.js meta.var.expr.js string.quoted.double.js |
| ``` " ``` | source.js meta.var.expr.js string.quoted.double.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.var.expr.js meta.brace.round.js |
| ``` ; ``` | source.js punctuation.terminator.statement.js |

**7:** ```const App = require("./application");```

| text | scope |
| -- | -- |
| ``` const ``` | source.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.var.expr.js |
| ``` App ``` | source.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.var.expr.js |
| ``` require ``` | source.js meta.var.expr.js meta.function-call.js support.function.js |
| ``` ( ``` | source.js meta.var.expr.js meta.brace.round.js |
| ``` " ``` | source.js meta.var.expr.js string.quoted.double.js punctuation.definition.string.begin.js |
| ``` ./application ``` | source.js meta.var.expr.js string.quoted.double.js |
| ``` " ``` | source.js meta.var.expr.js string.quoted.double.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.var.expr.js meta.brace.round.js |
| ``` ; ``` | source.js punctuation.terminator.statement.js |

**8:** ```const chalk_1 = require("chalk");```

| text | scope |
| -- | -- |
| ``` const ``` | source.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.var.expr.js |
| ``` chalk_1 ``` | source.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.var.expr.js |
| ``` require ``` | source.js meta.var.expr.js meta.function-call.js support.function.js |
| ``` ( ``` | source.js meta.var.expr.js meta.brace.round.js |
| ``` " ``` | source.js meta.var.expr.js string.quoted.double.js punctuation.definition.string.begin.js |
| ``` chalk ``` | source.js meta.var.expr.js string.quoted.double.js |
| ``` " ``` | source.js meta.var.expr.js string.quoted.double.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.var.expr.js meta.brace.round.js |
| ``` ; ``` | source.js punctuation.terminator.statement.js |

**9:** *blank line*

**10:** ```const param = {```

| text | scope |
| -- | -- |
| ``` const ``` | source.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.var.expr.js |
| ``` param ``` | source.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.var.expr.js |
| ``` { ``` | source.js meta.var.expr.js meta.objectliteral.js punctuation.definition.block.js |

**11:** ```    one: 55,```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.var.expr.js meta.objectliteral.js |
| ``` one ``` | source.js meta.var.expr.js meta.objectliteral.js meta.object.member.js meta.object-literal.key.js |
| ``` : ``` | source.js meta.var.expr.js meta.objectliteral.js meta.object.member.js meta.object-literal.key.js punctuation.separator.key-value.js |
| ```   ``` | source.js meta.var.expr.js meta.objectliteral.js meta.object.member.js |
| ``` 55 ``` | source.js meta.var.expr.js meta.objectliteral.js meta.object.member.js constant.numeric.decimal.js |
| ``` , ``` | source.js meta.var.expr.js meta.objectliteral.js punctuation.separator.comma.js |

**12:** ```    two: 66,```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.var.expr.js meta.objectliteral.js |
| ``` two ``` | source.js meta.var.expr.js meta.objectliteral.js meta.object.member.js meta.object-literal.key.js |
| ``` : ``` | source.js meta.var.expr.js meta.objectliteral.js meta.object.member.js meta.object-literal.key.js punctuation.separator.key-value.js |
| ```   ``` | source.js meta.var.expr.js meta.objectliteral.js meta.object.member.js |
| ``` 66 ``` | source.js meta.var.expr.js meta.objectliteral.js meta.object.member.js constant.numeric.decimal.js |
| ``` , ``` | source.js meta.var.expr.js meta.objectliteral.js punctuation.separator.comma.js |

**13:** ```    4: 'four',```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.var.expr.js meta.objectliteral.js |
| ``` 4 ``` | source.js meta.var.expr.js meta.objectliteral.js meta.object.member.js meta.object-literal.key.js constant.numeric.decimal.js |
| ``` : ``` | source.js meta.var.expr.js meta.objectliteral.js meta.object.member.js meta.object-literal.key.js punctuation.separator.key-value.js |
| ```   ``` | source.js meta.var.expr.js meta.objectliteral.js meta.object.member.js |
| ``` ' ``` | source.js meta.var.expr.js meta.objectliteral.js meta.object.member.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` four ``` | source.js meta.var.expr.js meta.objectliteral.js meta.object.member.js string.quoted.single.js |
| ``` ' ``` | source.js meta.var.expr.js meta.objectliteral.js meta.object.member.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` , ``` | source.js meta.var.expr.js meta.objectliteral.js punctuation.separator.comma.js |

**14:** ```};```

| text | scope |
| -- | -- |
| ``` } ``` | source.js meta.var.expr.js meta.objectliteral.js punctuation.definition.block.js |
| ``` ; ``` | source.js punctuation.terminator.statement.js |

**15:** *blank line*

**16:** ```// interface InitOptions extends Options {}```

| text | scope |
| -- | -- |
| ``` // ``` | source.js comment.line.double-slash.js punctuation.definition.comment.js |
| ```  interface InitOptions extends Options {} ``` | source.js comment.line.double-slash.js |

**17:** ```function issueEmitter(issue) {```

| text | scope |
| -- | -- |
| ``` function ``` | source.js meta.function.js storage.type.function.js |
| ```   ``` | source.js meta.function.js |
| ``` issueEmitter ``` | source.js meta.function.js meta.definition.function.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.parameters.js punctuation.definition.parameters.begin.js |
| ``` issue ``` | source.js meta.function.js meta.parameters.js variable.parameter.js |
| ``` ) ``` | source.js meta.function.js meta.parameters.js punctuation.definition.parameters.end.js |
| ```   ``` | source.js meta.function.js |
| ``` { ``` | source.js meta.function.js meta.block.js punctuation.definition.block.js |

**18:** ```    const { uri = '', row, col, text } = issue;```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` const ``` | source.js meta.function.js meta.block.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js |
| ``` { ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js punctuation.definition.binding-pattern.object.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js |
| ``` uri ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js |
| ``` = ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js |
| ``` ' ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` ' ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` , ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js |
| ``` row ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js meta.definition.variable.js variable.other.readwrite.js |
| ``` , ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js |
| ``` col ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js meta.definition.variable.js variable.other.readwrite.js |
| ``` , ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js |
| ``` text ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js |
| ``` } ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js punctuation.definition.binding-pattern.object.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js |
| ``` = ``` | source.js meta.function.js meta.block.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` issue ``` | source.js meta.function.js meta.block.js meta.var.expr.js variable.other.readwrite.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**19:** ```    console.log(`${chalk_1.default.green(uri)}[${row}, ${col}]: Unknown word: ${chalk_1.default.red(text)}`);```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` console ``` | source.js meta.function.js meta.block.js meta.function-call.js support.class.console.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` log ``` | source.js meta.function.js meta.block.js meta.function-call.js support.function.console.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` ` ``` | source.js meta.function.js meta.block.js string.template.js punctuation.definition.string.template.begin.js |
| ``` ${ ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js punctuation.definition.template-expression.begin.js |
| ``` chalk_1 ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js meta.embedded.line.js meta.function-call.js variable.other.object.js |
| ``` . ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js meta.embedded.line.js meta.function-call.js punctuation.accessor.js |
| ``` default ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js meta.embedded.line.js meta.function-call.js variable.other.object.property.js |
| ``` . ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js meta.embedded.line.js meta.function-call.js punctuation.accessor.js |
| ``` green ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js meta.embedded.line.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js meta.embedded.line.js meta.brace.round.js |
| ``` uri ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js meta.embedded.line.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js meta.embedded.line.js meta.brace.round.js |
| ``` } ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js punctuation.definition.template-expression.end.js |
| ``` [ ``` | source.js meta.function.js meta.block.js string.template.js |
| ``` ${ ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js punctuation.definition.template-expression.begin.js |
| ``` row ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js meta.embedded.line.js variable.other.readwrite.js |
| ``` } ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js punctuation.definition.template-expression.end.js |
| ``` ,  ``` | source.js meta.function.js meta.block.js string.template.js |
| ``` ${ ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js punctuation.definition.template-expression.begin.js |
| ``` col ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js meta.embedded.line.js variable.other.readwrite.js |
| ``` } ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js punctuation.definition.template-expression.end.js |
| ``` ]: Unknown word:  ``` | source.js meta.function.js meta.block.js string.template.js |
| ``` ${ ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js punctuation.definition.template-expression.begin.js |
| ``` chalk_1 ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js meta.embedded.line.js meta.function-call.js variable.other.object.js |
| ``` . ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js meta.embedded.line.js meta.function-call.js punctuation.accessor.js |
| ``` default ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js meta.embedded.line.js meta.function-call.js variable.other.object.property.js |
| ``` . ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js meta.embedded.line.js meta.function-call.js punctuation.accessor.js |
| ``` red ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js meta.embedded.line.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js meta.embedded.line.js meta.brace.round.js |
| ``` text ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js meta.embedded.line.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js meta.embedded.line.js meta.brace.round.js |
| ``` } ``` | source.js meta.function.js meta.block.js string.template.js meta.template.expression.js punctuation.definition.template-expression.end.js |
| ``` ` ``` | source.js meta.function.js meta.block.js string.template.js punctuation.definition.string.template.end.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**20:** ```}```

| text | scope |
| -- | -- |
| ``` } ``` | source.js meta.function.js meta.block.js punctuation.definition.block.js |

**21:** ```function issueEmitterWordsOnly(issue) {```

| text | scope |
| -- | -- |
| ``` function ``` | source.js meta.function.js storage.type.function.js |
| ```   ``` | source.js meta.function.js |
| ``` issueEmitterWordsOnly ``` | source.js meta.function.js meta.definition.function.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.parameters.js punctuation.definition.parameters.begin.js |
| ``` issue ``` | source.js meta.function.js meta.parameters.js variable.parameter.js |
| ``` ) ``` | source.js meta.function.js meta.parameters.js punctuation.definition.parameters.end.js |
| ```   ``` | source.js meta.function.js |
| ``` { ``` | source.js meta.function.js meta.block.js punctuation.definition.block.js |

**22:** ```    const { text } = issue;```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` const ``` | source.js meta.function.js meta.block.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js |
| ``` { ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js punctuation.definition.binding-pattern.object.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js |
| ``` text ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js |
| ``` } ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js punctuation.definition.binding-pattern.object.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.object-binding-pattern-variable.js |
| ``` = ``` | source.js meta.function.js meta.block.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` issue ``` | source.js meta.function.js meta.block.js meta.var.expr.js variable.other.readwrite.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**23:** ```    console.log(text);```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` console ``` | source.js meta.function.js meta.block.js meta.function-call.js support.class.console.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` log ``` | source.js meta.function.js meta.block.js meta.function-call.js support.function.console.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` text ``` | source.js meta.function.js meta.block.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**24:** ```}```

| text | scope |
| -- | -- |
| ``` } ``` | source.js meta.function.js meta.block.js punctuation.definition.block.js |

**25:** ```function errorEmitter(message, error) {```

| text | scope |
| -- | -- |
| ``` function ``` | source.js meta.function.js storage.type.function.js |
| ```   ``` | source.js meta.function.js |
| ``` errorEmitter ``` | source.js meta.function.js meta.definition.function.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.parameters.js punctuation.definition.parameters.begin.js |
| ``` message ``` | source.js meta.function.js meta.parameters.js variable.parameter.js |
| ``` , ``` | source.js meta.function.js meta.parameters.js punctuation.separator.parameter.js |
| ```   ``` | source.js meta.function.js meta.parameters.js |
| ``` error ``` | source.js meta.function.js meta.parameters.js variable.parameter.js |
| ``` ) ``` | source.js meta.function.js meta.parameters.js punctuation.definition.parameters.end.js |
| ```   ``` | source.js meta.function.js |
| ``` { ``` | source.js meta.function.js meta.block.js punctuation.definition.block.js |

**26:** ```    console.error(chalk_1.default.red(message), error);```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` console ``` | source.js meta.function.js meta.block.js meta.function-call.js support.class.console.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` error ``` | source.js meta.function.js meta.block.js meta.function-call.js support.function.console.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` chalk_1 ``` | source.js meta.function.js meta.block.js meta.function-call.js variable.other.object.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` default ``` | source.js meta.function.js meta.block.js meta.function-call.js variable.other.object.property.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` red ``` | source.js meta.function.js meta.block.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` message ``` | source.js meta.function.js meta.block.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` , ``` | source.js meta.function.js meta.block.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.function.js meta.block.js |
| ``` error ``` | source.js meta.function.js meta.block.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**27:** ```    return Promise.resolve();```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` return ``` | source.js meta.function.js meta.block.js keyword.control.flow.js |
| ```   ``` | source.js meta.function.js meta.block.js |
| ``` Promise ``` | source.js meta.function.js meta.block.js meta.function-call.js support.class.builtin.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` resolve ``` | source.js meta.function.js meta.block.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**28:** ```}```

| text | scope |
| -- | -- |
| ``` } ``` | source.js meta.function.js meta.block.js punctuation.definition.block.js |

**29:** ```function infoEmitter(message) {```

| text | scope |
| -- | -- |
| ``` function ``` | source.js meta.function.js storage.type.function.js |
| ```   ``` | source.js meta.function.js |
| ``` infoEmitter ``` | source.js meta.function.js meta.definition.function.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.parameters.js punctuation.definition.parameters.begin.js |
| ``` message ``` | source.js meta.function.js meta.parameters.js variable.parameter.js |
| ``` ) ``` | source.js meta.function.js meta.parameters.js punctuation.definition.parameters.end.js |
| ```   ``` | source.js meta.function.js |
| ``` { ``` | source.js meta.function.js meta.block.js punctuation.definition.block.js |

**30:** ```    console.info(chalk_1.default.yellow(message));```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` console ``` | source.js meta.function.js meta.block.js meta.function-call.js support.class.console.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` info ``` | source.js meta.function.js meta.block.js meta.function-call.js support.function.console.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` chalk_1 ``` | source.js meta.function.js meta.block.js meta.function-call.js variable.other.object.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` default ``` | source.js meta.function.js meta.block.js meta.function-call.js variable.other.object.property.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` yellow ``` | source.js meta.function.js meta.block.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` message ``` | source.js meta.function.js meta.block.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**31:** ```}```

| text | scope |
| -- | -- |
| ``` } ``` | source.js meta.function.js meta.block.js punctuation.definition.block.js |

**32:** ```function debugEmitter(message) {```

| text | scope |
| -- | -- |
| ``` function ``` | source.js meta.function.js storage.type.function.js |
| ```   ``` | source.js meta.function.js |
| ``` debugEmitter ``` | source.js meta.function.js meta.definition.function.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.parameters.js punctuation.definition.parameters.begin.js |
| ``` message ``` | source.js meta.function.js meta.parameters.js variable.parameter.js |
| ``` ) ``` | source.js meta.function.js meta.parameters.js punctuation.definition.parameters.end.js |
| ```   ``` | source.js meta.function.js |
| ``` { ``` | source.js meta.function.js meta.block.js punctuation.definition.block.js |

**33:** ```    console.info(chalk_1.default.cyan(message));```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` console ``` | source.js meta.function.js meta.block.js meta.function-call.js support.class.console.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` info ``` | source.js meta.function.js meta.block.js meta.function-call.js support.function.console.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` chalk_1 ``` | source.js meta.function.js meta.block.js meta.function-call.js variable.other.object.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` default ``` | source.js meta.function.js meta.block.js meta.function-call.js variable.other.object.property.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` cyan ``` | source.js meta.function.js meta.block.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` message ``` | source.js meta.function.js meta.block.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**34:** ```}```

| text | scope |
| -- | -- |
| ``` } ``` | source.js meta.function.js meta.block.js punctuation.definition.block.js |

**35:** ```function nullEmitter(_) { }```

| text | scope |
| -- | -- |
| ``` function ``` | source.js meta.function.js storage.type.function.js |
| ```   ``` | source.js meta.function.js |
| ``` nullEmitter ``` | source.js meta.function.js meta.definition.function.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.parameters.js punctuation.definition.parameters.begin.js |
| ``` _ ``` | source.js meta.function.js meta.parameters.js variable.parameter.js |
| ``` ) ``` | source.js meta.function.js meta.parameters.js punctuation.definition.parameters.end.js |
| ```   ``` | source.js meta.function.js |
| ``` { ``` | source.js meta.function.js meta.block.js punctuation.definition.block.js |
| ```   ``` | source.js meta.function.js meta.block.js |
| ``` } ``` | source.js meta.function.js meta.block.js punctuation.definition.block.js |

**36:** ```let showHelp = true;```

| text | scope |
| -- | -- |
| ``` let ``` | source.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.var.expr.js |
| ``` showHelp ``` | source.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.var.expr.js |
| ``` true ``` | source.js meta.var.expr.js constant.language.boolean.true.js |
| ``` ; ``` | source.js punctuation.terminator.statement.js |

**37:** ```program```

| text | scope |
| -- | -- |
| ``` program ``` | source.js variable.other.readwrite.js |

**38:** ```    .version(npmPackage.version)```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` version ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` npmPackage ``` | source.js variable.other.object.js |
| ``` . ``` | source.js punctuation.accessor.js |
| ``` version ``` | source.js support.variable.property.dom.js |
| ``` ) ``` | source.js meta.brace.round.js |

**39:** ```    .description('Spelling Checker for Code');```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` description ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` Spelling Checker for Code ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |
| ``` ; ``` | source.js punctuation.terminator.statement.js |

**40:** ```program```

| text | scope |
| -- | -- |
| ``` program ``` | source.js variable.other.readwrite.js |

**41:** ```    .option('-c, --config <cspell.json>', 'Configuration file to use.  By default cspell looks for cspell.json in the current directory.')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` option ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` -c, --config <cspell.json> ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` , ``` | source.js punctuation.separator.comma.js |
| ```   ``` | source.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` Configuration file to use.  By default cspell looks for cspell.json in the current directory. ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**42:** ```    .option('-v, --verbose', 'display more information about the files being checked and the configuration')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` option ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` -v, --verbose ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` , ``` | source.js punctuation.separator.comma.js |
| ```   ``` | source.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` display more information about the files being checked and the configuration ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**43:** ```    .option('--local <local>', 'Set language locals. i.e. "en,fr" for English and French, or "en-GB" for British English.')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` option ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` --local <local> ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` , ``` | source.js punctuation.separator.comma.js |
| ```   ``` | source.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` Set language locals. i.e. "en,fr" for English and French, or "en-GB" for British English. ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**44:** ```    .option('--wordsOnly', 'Only output the words not found in the dictionaries.')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` option ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` --wordsOnly ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` , ``` | source.js punctuation.separator.comma.js |
| ```   ``` | source.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` Only output the words not found in the dictionaries. ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**45:** ```    .option('-u, --unique', 'Only output the first instance of a word not found in the dictionaries.')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` option ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` -u, --unique ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` , ``` | source.js punctuation.separator.comma.js |
| ```   ``` | source.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` Only output the first instance of a word not found in the dictionaries. ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**46:** ```    .option('--debug', 'Output information useful for debugging cspell.json files.')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` option ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` --debug ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` , ``` | source.js punctuation.separator.comma.js |
| ```   ``` | source.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` Output information useful for debugging cspell.json files. ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**47:** ```    .option('-e, --exclude <glob>', 'Exclude files matching the glob pattern')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` option ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` -e, --exclude <glob> ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` , ``` | source.js punctuation.separator.comma.js |
| ```   ``` | source.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` Exclude files matching the glob pattern ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**48:** ```    .option('--no-color', 'Turn off color.')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` option ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` --no-color ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` , ``` | source.js punctuation.separator.comma.js |
| ```   ``` | source.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` Turn off color. ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**49:** ```    .option('--color', 'Force color')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` option ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` --color ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` , ``` | source.js punctuation.separator.comma.js |
| ```   ``` | source.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` Force color ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**50:** ```    .arguments('<files...>')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` arguments ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` <files...> ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**51:** ```    .action((files, options) => {```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` action ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ( ``` | source.js meta.arrow.js meta.parameters.js punctuation.definition.parameters.begin.js |
| ``` files ``` | source.js meta.arrow.js meta.parameters.js variable.parameter.js |
| ``` , ``` | source.js meta.arrow.js meta.parameters.js punctuation.separator.parameter.js |
| ```   ``` | source.js meta.arrow.js meta.parameters.js |
| ``` options ``` | source.js meta.arrow.js meta.parameters.js variable.parameter.js |
| ``` ) ``` | source.js meta.arrow.js meta.parameters.js punctuation.definition.parameters.end.js |
| ```   ``` | source.js meta.arrow.js |
| ``` => ``` | source.js meta.arrow.js storage.type.function.arrow.js |
| ```   ``` | source.js meta.arrow.js |
| ``` { ``` | source.js meta.arrow.js meta.block.js punctuation.definition.block.js |

**52:** ```    const emitters = {```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.arrow.js meta.block.js |
| ``` const ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js |
| ``` emitters ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js |
| ``` { ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js punctuation.definition.block.js |

**53:** ```        issue: options.wordsOnly ? issueEmitterWordsOnly : issueEmitter,```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js |
| ``` issue ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js meta.object-literal.key.js |
| ``` : ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js meta.object-literal.key.js punctuation.separator.key-value.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js |
| ``` options ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js punctuation.accessor.js |
| ``` wordsOnly ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js variable.other.property.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js |
| ``` ? ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js keyword.operator.ternary.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js |
| ``` issueEmitterWordsOnly ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js variable.other.readwrite.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js |
| ``` : ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js keyword.operator.ternary.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js |
| ``` issueEmitter ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js variable.other.readwrite.js |
| ``` , ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js punctuation.separator.comma.js |

**54:** ```        error: errorEmitter,```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js |
| ``` error ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js meta.object-literal.key.js |
| ``` : ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js meta.object-literal.key.js punctuation.separator.key-value.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js |
| ``` errorEmitter ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js variable.other.readwrite.js |
| ``` , ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js punctuation.separator.comma.js |

**55:** ```        info: options.verbose ? infoEmitter : nullEmitter,```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js |
| ``` info ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js meta.object-literal.key.js |
| ``` : ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js meta.object-literal.key.js punctuation.separator.key-value.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js |
| ``` options ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js punctuation.accessor.js |
| ``` verbose ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js variable.other.property.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js |
| ``` ? ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js keyword.operator.ternary.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js |
| ``` infoEmitter ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js variable.other.readwrite.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js |
| ``` : ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js keyword.operator.ternary.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js |
| ``` nullEmitter ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js variable.other.readwrite.js |
| ``` , ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js punctuation.separator.comma.js |

**56:** ```        debug: options.debug ? debugEmitter : nullEmitter,```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js |
| ``` debug ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js meta.object-literal.key.js |
| ``` : ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js meta.object-literal.key.js punctuation.separator.key-value.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js |
| ``` options ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js punctuation.accessor.js |
| ``` debug ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js variable.other.property.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js |
| ``` ? ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js keyword.operator.ternary.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js |
| ``` debugEmitter ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js variable.other.readwrite.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js |
| ``` : ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js keyword.operator.ternary.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js |
| ``` nullEmitter ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js meta.object.member.js variable.other.readwrite.js |
| ``` , ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js punctuation.separator.comma.js |

**57:** ```    };```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js |
| ``` } ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.objectliteral.js punctuation.definition.block.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js punctuation.terminator.statement.js |

**58:** ```    showHelp = false;```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.arrow.js meta.block.js |
| ``` showHelp ``` | source.js meta.arrow.js meta.block.js variable.other.readwrite.js |
| ```   ``` | source.js meta.arrow.js meta.block.js |
| ``` = ``` | source.js meta.arrow.js meta.block.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.arrow.js meta.block.js |
| ``` false ``` | source.js meta.arrow.js meta.block.js constant.language.boolean.false.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js punctuation.terminator.statement.js |

**59:** ```    App.lint(files, options, emitters).then(result => {```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.arrow.js meta.block.js |
| ``` App ``` | source.js meta.arrow.js meta.block.js meta.function-call.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` lint ``` | source.js meta.arrow.js meta.block.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` files ``` | source.js meta.arrow.js meta.block.js variable.other.readwrite.js |
| ``` , ``` | source.js meta.arrow.js meta.block.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.arrow.js meta.block.js |
| ``` options ``` | source.js meta.arrow.js meta.block.js variable.other.readwrite.js |
| ``` , ``` | source.js meta.arrow.js meta.block.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.arrow.js meta.block.js |
| ``` emitters ``` | source.js meta.arrow.js meta.block.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` then ``` | source.js meta.arrow.js meta.block.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` result ``` | source.js meta.arrow.js meta.block.js meta.arrow.js variable.parameter.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.arrow.js |
| ``` => ``` | source.js meta.arrow.js meta.block.js meta.arrow.js storage.type.function.arrow.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.arrow.js |
| ``` { ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.definition.block.js |

**60:** ```        console.error('CSpell: Files checked: %d, Issues found: %d in %d files', result.files, result.issues, result.filesWithIssues.size);```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js |
| ``` console ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js support.class.console.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` error ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js support.function.console.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` ' ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` CSpell: Files checked: %d, Issues found: %d in %d files ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js string.quoted.single.js |
| ``` ' ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` , ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js |
| ``` result ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.accessor.js |
| ``` files ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js variable.other.property.js |
| ``` , ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js |
| ``` result ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.accessor.js |
| ``` issues ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js variable.other.property.js |
| ``` , ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js |
| ``` result ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.accessor.js |
| ``` filesWithIssues ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js variable.other.object.property.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.accessor.js |
| ``` size ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js support.variable.property.dom.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.terminator.statement.js |

**61:** ```        process.exit(result.issues ? 1 : 0);```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js |
| ``` process ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js support.variable.object.process.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` exit ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js support.function.process.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` result ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.accessor.js |
| ``` issues ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js variable.other.property.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js |
| ``` ? ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js keyword.operator.ternary.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js |
| ``` 1 ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js constant.numeric.decimal.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js |
| ``` : ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js keyword.operator.ternary.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js |
| ``` 0 ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js constant.numeric.decimal.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.terminator.statement.js |

**62:** ```    }, (error) => {```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js |
| ``` } ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.definition.block.js |
| ``` , ``` | source.js meta.arrow.js meta.block.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.arrow.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.parameters.js punctuation.definition.parameters.begin.js |
| ``` error ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.parameters.js variable.parameter.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.parameters.js punctuation.definition.parameters.end.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.arrow.js |
| ``` => ``` | source.js meta.arrow.js meta.block.js meta.arrow.js storage.type.function.arrow.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.arrow.js |
| ``` { ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.definition.block.js |

**63:** ```        console.error(error.message);```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js |
| ``` console ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js support.class.console.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` error ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js support.function.console.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` error ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.accessor.js |
| ``` message ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js variable.other.property.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.terminator.statement.js |

**64:** ```        process.exit(1);```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js |
| ``` process ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js support.variable.object.process.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` exit ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js support.function.process.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` 1 ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js constant.numeric.decimal.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.terminator.statement.js |

**65:** ```    });```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js |
| ``` } ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.definition.block.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js punctuation.terminator.statement.js |

**66:** ```});```

| text | scope |
| -- | -- |
| ``` } ``` | source.js meta.arrow.js meta.block.js punctuation.definition.block.js |
| ``` ) ``` | source.js meta.brace.round.js |
| ``` ; ``` | source.js punctuation.terminator.statement.js |

**67:** ```program```

| text | scope |
| -- | -- |
| ``` program ``` | source.js variable.other.readwrite.js |

**68:** ```    .command('trace')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` command ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` trace ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**69:** ```    .description('Trace words')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` description ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` Trace words ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**70:** ```    .arguments('<words...>')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` arguments ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` <words...> ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**71:** ```    .option('-c, --config <cspell.json>', 'Configuration file to use.  By default cspell looks for cspell.json in the current directory.')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` option ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` -c, --config <cspell.json> ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` , ``` | source.js punctuation.separator.comma.js |
| ```   ``` | source.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` Configuration file to use.  By default cspell looks for cspell.json in the current directory. ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**72:** ```    .option('--no-color', 'Turn off color.')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` option ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` --no-color ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` , ``` | source.js punctuation.separator.comma.js |
| ```   ``` | source.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` Turn off color. ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**73:** ```    .option('--color', 'Force color')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` option ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` --color ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` , ``` | source.js punctuation.separator.comma.js |
| ```   ``` | source.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` Force color ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**74:** ```    .action((words, options) => {```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` action ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ( ``` | source.js meta.arrow.js meta.parameters.js punctuation.definition.parameters.begin.js |
| ``` words ``` | source.js meta.arrow.js meta.parameters.js variable.parameter.js |
| ``` , ``` | source.js meta.arrow.js meta.parameters.js punctuation.separator.parameter.js |
| ```   ``` | source.js meta.arrow.js meta.parameters.js |
| ``` options ``` | source.js meta.arrow.js meta.parameters.js variable.parameter.js |
| ``` ) ``` | source.js meta.arrow.js meta.parameters.js punctuation.definition.parameters.end.js |
| ```   ``` | source.js meta.arrow.js |
| ``` => ``` | source.js meta.arrow.js storage.type.function.arrow.js |
| ```   ``` | source.js meta.arrow.js |
| ``` { ``` | source.js meta.arrow.js meta.block.js punctuation.definition.block.js |

**75:** ```    showHelp = false;```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.arrow.js meta.block.js |
| ``` showHelp ``` | source.js meta.arrow.js meta.block.js variable.other.readwrite.js |
| ```   ``` | source.js meta.arrow.js meta.block.js |
| ``` = ``` | source.js meta.arrow.js meta.block.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.arrow.js meta.block.js |
| ``` false ``` | source.js meta.arrow.js meta.block.js constant.language.boolean.false.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js punctuation.terminator.statement.js |

**76:** ```    App.trace(words, options).then(result => {```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.arrow.js meta.block.js |
| ``` App ``` | source.js meta.arrow.js meta.block.js meta.function-call.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` trace ``` | source.js meta.arrow.js meta.block.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` words ``` | source.js meta.arrow.js meta.block.js variable.other.readwrite.js |
| ``` , ``` | source.js meta.arrow.js meta.block.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.arrow.js meta.block.js |
| ``` options ``` | source.js meta.arrow.js meta.block.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` then ``` | source.js meta.arrow.js meta.block.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` result ``` | source.js meta.arrow.js meta.block.js meta.arrow.js variable.parameter.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.arrow.js |
| ``` => ``` | source.js meta.arrow.js meta.block.js meta.arrow.js storage.type.function.arrow.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.arrow.js |
| ``` { ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.definition.block.js |

**77:** ```        result.forEach(emitTraceResult);```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js |
| ``` result ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` forEach ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js support.function.dom.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` emitTraceResult ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.terminator.statement.js |

**78:** ```        process.exit(0);```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js |
| ``` process ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js support.variable.object.process.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` exit ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js support.function.process.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` 0 ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js constant.numeric.decimal.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.terminator.statement.js |

**79:** ```    }, (error) => {```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js |
| ``` } ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.definition.block.js |
| ``` , ``` | source.js meta.arrow.js meta.block.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.arrow.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.parameters.js punctuation.definition.parameters.begin.js |
| ``` error ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.parameters.js variable.parameter.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.parameters.js punctuation.definition.parameters.end.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.arrow.js |
| ``` => ``` | source.js meta.arrow.js meta.block.js meta.arrow.js storage.type.function.arrow.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.arrow.js |
| ``` { ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.definition.block.js |

**80:** ```        console.error(error.message);```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js |
| ``` console ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js support.class.console.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` error ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js support.function.console.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` error ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.accessor.js |
| ``` message ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js variable.other.property.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.terminator.statement.js |

**81:** ```        process.exit(1);```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js |
| ``` process ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js support.variable.object.process.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` exit ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.function-call.js support.function.process.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` 1 ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js constant.numeric.decimal.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.terminator.statement.js |

**82:** ```    });```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js |
| ``` } ``` | source.js meta.arrow.js meta.block.js meta.arrow.js meta.block.js punctuation.definition.block.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js punctuation.terminator.statement.js |

**83:** ```});```

| text | scope |
| -- | -- |
| ``` } ``` | source.js meta.arrow.js meta.block.js punctuation.definition.block.js |
| ``` ) ``` | source.js meta.brace.round.js |
| ``` ; ``` | source.js punctuation.terminator.statement.js |

**84:** ```program```

| text | scope |
| -- | -- |
| ``` program ``` | source.js variable.other.readwrite.js |

**85:** ```    .command('check')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` command ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` check ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**86:** ```    .description('Spell check file(s) and display the result. The full file is displayed in color.')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` description ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` Spell check file(s) and display the result. The full file is displayed in color. ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**87:** ```    .arguments('<files...>')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` arguments ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` <files...> ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**88:** ```    .option('-c, --config <cspell.json>', 'Configuration file to use.  By default cspell looks for cspell.json in the current directory.')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` option ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` -c, --config <cspell.json> ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` , ``` | source.js punctuation.separator.comma.js |
| ```   ``` | source.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` Configuration file to use.  By default cspell looks for cspell.json in the current directory. ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**89:** ```    .option('--no-color', 'Turn off color.')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` option ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` --no-color ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` , ``` | source.js punctuation.separator.comma.js |
| ```   ``` | source.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` Turn off color. ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**90:** ```    .option('--color', 'Force color')```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` option ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` --color ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` , ``` | source.js punctuation.separator.comma.js |
| ```   ``` | source.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` Force color ``` | source.js string.quoted.single.js |
| ``` ' ``` | source.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.brace.round.js |

**91:** ```    .action(async (files, options) => {```

| text | scope |
| -- | -- |
| ```      ``` | source.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` action ``` | source.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` async ``` | source.js meta.arrow.js storage.modifier.async.js |
| ```   ``` | source.js meta.arrow.js |
| ``` ( ``` | source.js meta.arrow.js meta.parameters.js punctuation.definition.parameters.begin.js |
| ``` files ``` | source.js meta.arrow.js meta.parameters.js variable.parameter.js |
| ``` , ``` | source.js meta.arrow.js meta.parameters.js punctuation.separator.parameter.js |
| ```   ``` | source.js meta.arrow.js meta.parameters.js |
| ``` options ``` | source.js meta.arrow.js meta.parameters.js variable.parameter.js |
| ``` ) ``` | source.js meta.arrow.js meta.parameters.js punctuation.definition.parameters.end.js |
| ```   ``` | source.js meta.arrow.js |
| ``` => ``` | source.js meta.arrow.js storage.type.function.arrow.js |
| ```   ``` | source.js meta.arrow.js |
| ``` { ``` | source.js meta.arrow.js meta.block.js punctuation.definition.block.js |

**92:** ```    showHelp = false;```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.arrow.js meta.block.js |
| ``` showHelp ``` | source.js meta.arrow.js meta.block.js variable.other.readwrite.js |
| ```   ``` | source.js meta.arrow.js meta.block.js |
| ``` = ``` | source.js meta.arrow.js meta.block.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.arrow.js meta.block.js |
| ``` false ``` | source.js meta.arrow.js meta.block.js constant.language.boolean.false.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js punctuation.terminator.statement.js |

**93:** ```    for (const filename of files) {```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.arrow.js meta.block.js |
| ``` for ``` | source.js meta.arrow.js meta.block.js keyword.control.loop.js |
| ```   ``` | source.js meta.arrow.js meta.block.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` const ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js |
| ``` filename ``` | source.js meta.arrow.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.arrow.js meta.block.js |
| ``` of ``` | source.js meta.arrow.js meta.block.js keyword.operator.expression.of.js |
| ```   ``` | source.js meta.arrow.js meta.block.js |
| ``` files ``` | source.js meta.arrow.js meta.block.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.brace.round.js |
| ```   ``` | source.js meta.arrow.js meta.block.js |
| ``` { ``` | source.js meta.arrow.js meta.block.js meta.block.js punctuation.definition.block.js |

**94:** ```        console.log(chalk_1.default.yellowBright(`Check file: ${filename}`));```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.arrow.js meta.block.js meta.block.js |
| ``` console ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.function-call.js support.class.console.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` log ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.function-call.js support.function.console.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.brace.round.js |
| ``` chalk_1 ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.function-call.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` default ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.function-call.js variable.other.object.property.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` yellowBright ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.brace.round.js |
| ``` ` ``` | source.js meta.arrow.js meta.block.js meta.block.js string.template.js punctuation.definition.string.template.begin.js |
| ``` Check file:  ``` | source.js meta.arrow.js meta.block.js meta.block.js string.template.js |
| ``` ${ ``` | source.js meta.arrow.js meta.block.js meta.block.js string.template.js meta.template.expression.js punctuation.definition.template-expression.begin.js |
| ``` filename ``` | source.js meta.arrow.js meta.block.js meta.block.js string.template.js meta.template.expression.js meta.embedded.line.js variable.other.readwrite.js |
| ``` } ``` | source.js meta.arrow.js meta.block.js meta.block.js string.template.js meta.template.expression.js punctuation.definition.template-expression.end.js |
| ``` ` ``` | source.js meta.arrow.js meta.block.js meta.block.js string.template.js punctuation.definition.string.template.end.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.brace.round.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js meta.block.js punctuation.terminator.statement.js |

**95:** ```        console.log();```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.arrow.js meta.block.js meta.block.js |
| ``` console ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.function-call.js support.class.console.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` log ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.function-call.js support.function.console.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.brace.round.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js meta.block.js punctuation.terminator.statement.js |

**96:** ```        try {```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.arrow.js meta.block.js meta.block.js |
| ``` try ``` | source.js meta.arrow.js meta.block.js meta.block.js keyword.control.trycatch.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js |
| ``` { ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js punctuation.definition.block.js |

**97:** ```            const result = await application_1.checkText(filename, options);```

| text | scope |
| -- | -- |
| ```              ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js |
| ``` const ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.var.expr.js |
| ``` result ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.var.expr.js |
| ``` await ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.var.expr.js keyword.control.flow.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.var.expr.js |
| ``` application_1 ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.var.expr.js meta.function-call.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.var.expr.js meta.function-call.js punctuation.accessor.js |
| ``` checkText ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.var.expr.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` filename ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.var.expr.js variable.other.readwrite.js |
| ``` , ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.var.expr.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.var.expr.js |
| ``` options ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.var.expr.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js punctuation.terminator.statement.js |

**98:** ```            for (const item of result.items) {```

| text | scope |
| -- | -- |
| ```              ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js |
| ``` for ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js keyword.control.loop.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.brace.round.js |
| ``` const ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.var.expr.js |
| ``` item ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js |
| ``` of ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js keyword.operator.expression.of.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js |
| ``` result ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js punctuation.accessor.js |
| ``` items ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js variable.other.property.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.brace.round.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js |
| ``` { ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js punctuation.definition.block.js |

**99:** ```                const fn = item.flagIE === App.IncludeExcludeFlag.EXCLUDE```

| text | scope |
| -- | -- |
| ```                  ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js |
| ``` const ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js |
| ``` fn ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js |
| ``` item ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js punctuation.accessor.js |
| ``` flagIE ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js variable.other.property.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js |
| ``` === ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js keyword.operator.comparison.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js |
| ``` App ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js punctuation.accessor.js |
| ``` IncludeExcludeFlag ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js variable.other.object.property.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js punctuation.accessor.js |
| ``` EXCLUDE ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js variable.other.constant.property.js |

**100:** ```                    ? chalk_1.default.gray```

| text | scope |
| -- | -- |
| ```                      ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js |
| ``` ? ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js keyword.operator.ternary.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js |
| ``` chalk_1 ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js punctuation.accessor.js |
| ``` default ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js variable.other.object.property.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js punctuation.accessor.js |
| ``` gray ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js variable.other.property.js |

**101:** ```                    : item.isError ? chalk_1.default.red : chalk_1.default.whiteBright;```

| text | scope |
| -- | -- |
| ```                      ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js |
| ``` : ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js keyword.operator.ternary.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js |
| ``` item ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js punctuation.accessor.js |
| ``` isError ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js variable.other.property.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js |
| ``` ? ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js keyword.operator.ternary.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js |
| ``` chalk_1 ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js punctuation.accessor.js |
| ``` default ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js variable.other.object.property.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js punctuation.accessor.js |
| ``` red ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js variable.other.property.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js |
| ``` : ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js keyword.operator.ternary.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js |
| ``` chalk_1 ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js punctuation.accessor.js |
| ``` default ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js variable.other.object.property.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js punctuation.accessor.js |
| ``` whiteBright ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js variable.other.property.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js punctuation.terminator.statement.js |

**102:** ```                const t = fn(item.text);```

| text | scope |
| -- | -- |
| ```                  ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js |
| ``` const ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js |
| ``` t ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js |
| ``` fn ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` item ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js variable.other.object.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js punctuation.accessor.js |
| ``` text ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js support.variable.property.dom.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js punctuation.terminator.statement.js |

**103:** ```                process.stdout.write(t);```

| text | scope |
| -- | -- |
| ```                  ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js |
| ``` process ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.function-call.js support.variable.object.process.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` stdout ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.function-call.js support.variable.property.process.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` write ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.function-call.js support.function.dom.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.brace.round.js |
| ``` t ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js punctuation.terminator.statement.js |

**104:** ```            }```

| text | scope |
| -- | -- |
| ```              ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js |
| ``` } ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.block.js punctuation.definition.block.js |

**105:** ```            console.log();```

| text | scope |
| -- | -- |
| ```              ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js |
| ``` console ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.function-call.js support.class.console.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` log ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.function-call.js support.function.console.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.brace.round.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js punctuation.terminator.statement.js |

**106:** ```        }```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js |
| ``` } ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js punctuation.definition.block.js |

**107:** ```        catch (e) {```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.arrow.js meta.block.js meta.block.js |
| ``` catch ``` | source.js meta.arrow.js meta.block.js meta.block.js keyword.control.trycatch.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.brace.round.js |
| ``` e ``` | source.js meta.arrow.js meta.block.js meta.block.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.brace.round.js |
| ```   ``` | source.js meta.arrow.js meta.block.js meta.block.js |
| ``` { ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js punctuation.definition.block.js |

**108:** ```            console.error(`Failed to read "${filename}"`);```

| text | scope |
| -- | -- |
| ```              ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js |
| ``` console ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.function-call.js support.class.console.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` error ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.function-call.js support.function.console.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.brace.round.js |
| ``` ` ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js string.template.js punctuation.definition.string.template.begin.js |
| ``` Failed to read " ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js string.template.js |
| ``` ${ ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js string.template.js meta.template.expression.js punctuation.definition.template-expression.begin.js |
| ``` filename ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js string.template.js meta.template.expression.js meta.embedded.line.js variable.other.readwrite.js |
| ``` } ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js string.template.js meta.template.expression.js punctuation.definition.template-expression.end.js |
| ``` " ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js string.template.js |
| ``` ` ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js string.template.js punctuation.definition.string.template.end.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js punctuation.terminator.statement.js |

**109:** ```        }```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js |
| ``` } ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.block.js punctuation.definition.block.js |

**110:** ```        console.log();```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.arrow.js meta.block.js meta.block.js |
| ``` console ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.function-call.js support.class.console.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` log ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.function-call.js support.function.console.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.brace.round.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js meta.block.js punctuation.terminator.statement.js |

**111:** ```    }```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.arrow.js meta.block.js meta.block.js |
| ``` } ``` | source.js meta.arrow.js meta.block.js meta.block.js punctuation.definition.block.js |

**112:** ```    process.exit(0);```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.arrow.js meta.block.js |
| ``` process ``` | source.js meta.arrow.js meta.block.js meta.function-call.js support.variable.object.process.js |
| ``` . ``` | source.js meta.arrow.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` exit ``` | source.js meta.arrow.js meta.block.js meta.function-call.js support.function.process.js |
| ``` ( ``` | source.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` 0 ``` | source.js meta.arrow.js meta.block.js constant.numeric.decimal.js |
| ``` ) ``` | source.js meta.arrow.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.arrow.js meta.block.js punctuation.terminator.statement.js |

**113:** ```});```

| text | scope |
| -- | -- |
| ``` } ``` | source.js meta.arrow.js meta.block.js punctuation.definition.block.js |
| ``` ) ``` | source.js meta.brace.round.js |
| ``` ; ``` | source.js punctuation.terminator.statement.js |

**114:** *blank line*

**115:** ```program.parse(process.argv);```

| text | scope |
| -- | -- |
| ``` program ``` | source.js meta.function-call.js variable.other.object.js |
| ``` . ``` | source.js meta.function-call.js punctuation.accessor.js |
| ``` parse ``` | source.js meta.function-call.js support.function.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` process ``` | source.js support.variable.object.process.js |
| ``` . ``` | source.js punctuation.accessor.js |
| ``` argv ``` | source.js support.variable.property.process.js |
| ``` ) ``` | source.js meta.brace.round.js |
| ``` ; ``` | source.js punctuation.terminator.statement.js |

**116:** ```if (showHelp) {```

| text | scope |
| -- | -- |
| ``` if ``` | source.js keyword.control.conditional.js |
| ```   ``` | source.js |
| ``` ( ``` | source.js meta.brace.round.js |
| ``` showHelp ``` | source.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.brace.round.js |
| ```   ``` | source.js |
| ``` { ``` | source.js meta.block.js punctuation.definition.block.js |

**117:** ```    program.help();```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.block.js |
| ``` program ``` | source.js meta.block.js meta.function-call.js variable.other.object.js |
| ``` . ``` | source.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` help ``` | source.js meta.block.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.block.js meta.brace.round.js |
| ``` ) ``` | source.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.block.js punctuation.terminator.statement.js |

**118:** ```}```

| text | scope |
| -- | -- |
| ``` } ``` | source.js meta.block.js punctuation.definition.block.js |

**119:** ```function emitTraceResult(r) {```

| text | scope |
| -- | -- |
| ``` function ``` | source.js meta.function.js storage.type.function.js |
| ```   ``` | source.js meta.function.js |
| ``` emitTraceResult ``` | source.js meta.function.js meta.definition.function.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.parameters.js punctuation.definition.parameters.begin.js |
| ``` r ``` | source.js meta.function.js meta.parameters.js variable.parameter.js |
| ``` ) ``` | source.js meta.function.js meta.parameters.js punctuation.definition.parameters.end.js |
| ```   ``` | source.js meta.function.js |
| ``` { ``` | source.js meta.function.js meta.block.js punctuation.definition.block.js |

**120:** ```    const terminalWidth = process.stdout.columns || 120;```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` const ``` | source.js meta.function.js meta.block.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` terminalWidth ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.function.js meta.block.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` process ``` | source.js meta.function.js meta.block.js meta.var.expr.js support.variable.object.process.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.var.expr.js punctuation.accessor.js |
| ``` stdout ``` | source.js meta.function.js meta.block.js meta.var.expr.js support.variable.property.process.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.var.expr.js punctuation.accessor.js |
| ``` columns ``` | source.js meta.function.js meta.block.js meta.var.expr.js variable.other.property.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` || ``` | source.js meta.function.js meta.block.js meta.var.expr.js keyword.operator.logical.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` 120 ``` | source.js meta.function.js meta.block.js meta.var.expr.js constant.numeric.decimal.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**121:** ```    const widthName = 20;```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` const ``` | source.js meta.function.js meta.block.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` widthName ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.function.js meta.block.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` 20 ``` | source.js meta.function.js meta.block.js meta.var.expr.js constant.numeric.decimal.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**122:** ```    const w = chalk_1.default.green(r.word);```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` const ``` | source.js meta.function.js meta.block.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` w ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.function.js meta.block.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` chalk_1 ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js variable.other.object.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js punctuation.accessor.js |
| ``` default ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js variable.other.object.property.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js punctuation.accessor.js |
| ``` green ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` r ``` | source.js meta.function.js meta.block.js meta.var.expr.js variable.other.object.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.var.expr.js punctuation.accessor.js |
| ``` word ``` | source.js meta.function.js meta.block.js meta.var.expr.js variable.other.property.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**123:** ```    const f = r.found```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` const ``` | source.js meta.function.js meta.block.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` f ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.function.js meta.block.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` r ``` | source.js meta.function.js meta.block.js meta.var.expr.js variable.other.object.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.var.expr.js punctuation.accessor.js |
| ``` found ``` | source.js meta.function.js meta.block.js meta.var.expr.js variable.other.property.js |

**124:** ```        ? chalk_1.default.whiteBright('*')```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.function.js meta.block.js |
| ``` ? ``` | source.js meta.function.js meta.block.js keyword.operator.ternary.js |
| ```   ``` | source.js meta.function.js meta.block.js |
| ``` chalk_1 ``` | source.js meta.function.js meta.block.js meta.function-call.js variable.other.object.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` default ``` | source.js meta.function.js meta.block.js meta.function-call.js variable.other.object.property.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` whiteBright ``` | source.js meta.function.js meta.block.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` ' ``` | source.js meta.function.js meta.block.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` * ``` | source.js meta.function.js meta.block.js string.quoted.single.js |
| ``` ' ``` | source.js meta.function.js meta.block.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.brace.round.js |

**125:** ```        : chalk_1.default.dim('-');```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.function.js meta.block.js |
| ``` : ``` | source.js meta.function.js meta.block.js keyword.operator.ternary.js |
| ```   ``` | source.js meta.function.js meta.block.js |
| ``` chalk_1 ``` | source.js meta.function.js meta.block.js meta.function-call.js variable.other.object.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` default ``` | source.js meta.function.js meta.block.js meta.function-call.js variable.other.object.property.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` dim ``` | source.js meta.function.js meta.block.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` ' ``` | source.js meta.function.js meta.block.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` - ``` | source.js meta.function.js meta.block.js string.quoted.single.js |
| ``` ' ``` | source.js meta.function.js meta.block.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**126:** ```    const n = chalk_1.default.yellowBright(pad(r.dictName, widthName));```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` const ``` | source.js meta.function.js meta.block.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` n ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.function.js meta.block.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` chalk_1 ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js variable.other.object.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js punctuation.accessor.js |
| ``` default ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js variable.other.object.property.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js punctuation.accessor.js |
| ``` yellowBright ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` pad ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` r ``` | source.js meta.function.js meta.block.js meta.var.expr.js variable.other.object.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.var.expr.js punctuation.accessor.js |
| ``` dictName ``` | source.js meta.function.js meta.block.js meta.var.expr.js variable.other.property.js |
| ``` , ``` | source.js meta.function.js meta.block.js meta.var.expr.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` widthName ``` | source.js meta.function.js meta.block.js meta.var.expr.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**127:** ```    const used = [r.word.length, 1, widthName].reduce((a, b) => a + b, 3);```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` const ``` | source.js meta.function.js meta.block.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` used ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.function.js meta.block.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` [ ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js meta.brace.square.js |
| ``` r ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js variable.other.object.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js punctuation.accessor.js |
| ``` word ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js variable.other.object.property.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js punctuation.accessor.js |
| ``` length ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js support.variable.property.js |
| ``` , ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js |
| ``` 1 ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js constant.numeric.decimal.js |
| ``` , ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js |
| ``` widthName ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js variable.other.readwrite.js |
| ``` ] ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js meta.brace.square.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js punctuation.accessor.js |
| ``` reduce ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.arrow.js meta.parameters.js punctuation.definition.parameters.begin.js |
| ``` a ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.arrow.js meta.parameters.js variable.parameter.js |
| ``` , ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.arrow.js meta.parameters.js punctuation.separator.parameter.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.arrow.js meta.parameters.js |
| ``` b ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.arrow.js meta.parameters.js variable.parameter.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.arrow.js meta.parameters.js punctuation.definition.parameters.end.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.arrow.js |
| ``` => ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.arrow.js storage.type.function.arrow.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.arrow.js |
| ``` a ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.arrow.js variable.other.readwrite.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` + ``` | source.js meta.function.js meta.block.js meta.var.expr.js keyword.operator.arithmetic.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` b ``` | source.js meta.function.js meta.block.js meta.var.expr.js variable.other.readwrite.js |
| ``` , ``` | source.js meta.function.js meta.block.js meta.var.expr.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` 3 ``` | source.js meta.function.js meta.block.js meta.var.expr.js constant.numeric.decimal.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**128:** ```    const widthSrc = terminalWidth - used;```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` const ``` | source.js meta.function.js meta.block.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` widthSrc ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.function.js meta.block.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` terminalWidth ``` | source.js meta.function.js meta.block.js meta.var.expr.js variable.other.readwrite.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` - ``` | source.js meta.function.js meta.block.js meta.var.expr.js keyword.operator.arithmetic.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` used ``` | source.js meta.function.js meta.block.js meta.var.expr.js variable.other.readwrite.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**129:** ```    const s = chalk_1.default.white(trimMid(r.dictSource, widthSrc));```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` const ``` | source.js meta.function.js meta.block.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` s ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.function.js meta.block.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` chalk_1 ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js variable.other.object.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js punctuation.accessor.js |
| ``` default ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js variable.other.object.property.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js punctuation.accessor.js |
| ``` white ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` trimMid ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` r ``` | source.js meta.function.js meta.block.js meta.var.expr.js variable.other.object.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.var.expr.js punctuation.accessor.js |
| ``` dictSource ``` | source.js meta.function.js meta.block.js meta.var.expr.js variable.other.property.js |
| ``` , ``` | source.js meta.function.js meta.block.js meta.var.expr.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` widthSrc ``` | source.js meta.function.js meta.block.js meta.var.expr.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**130:** ```    const line = [w, f, n, s].join(' ');```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` const ``` | source.js meta.function.js meta.block.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` line ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.function.js meta.block.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` [ ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js meta.brace.square.js |
| ``` w ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js variable.other.readwrite.js |
| ``` , ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js |
| ``` f ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js variable.other.readwrite.js |
| ``` , ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js |
| ``` n ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js variable.other.readwrite.js |
| ``` , ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js |
| ``` s ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js variable.other.readwrite.js |
| ``` ] ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.array.literal.js meta.brace.square.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js punctuation.accessor.js |
| ``` join ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js support.function.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` ' ``` | source.js meta.function.js meta.block.js meta.var.expr.js string.quoted.single.js punctuation.definition.string.begin.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js string.quoted.single.js |
| ``` ' ``` | source.js meta.function.js meta.block.js meta.var.expr.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**131:** ```    console.log(line);```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` console ``` | source.js meta.function.js meta.block.js meta.function-call.js support.class.console.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` log ``` | source.js meta.function.js meta.block.js meta.function-call.js support.function.console.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` line ``` | source.js meta.function.js meta.block.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**132:** ```}```

| text | scope |
| -- | -- |
| ``` } ``` | source.js meta.function.js meta.block.js punctuation.definition.block.js |

**133:** ```function pad(s, w) {```

| text | scope |
| -- | -- |
| ``` function ``` | source.js meta.function.js storage.type.function.js |
| ```   ``` | source.js meta.function.js |
| ``` pad ``` | source.js meta.function.js meta.definition.function.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.parameters.js punctuation.definition.parameters.begin.js |
| ``` s ``` | source.js meta.function.js meta.parameters.js variable.parameter.js |
| ``` , ``` | source.js meta.function.js meta.parameters.js punctuation.separator.parameter.js |
| ```   ``` | source.js meta.function.js meta.parameters.js |
| ``` w ``` | source.js meta.function.js meta.parameters.js variable.parameter.js |
| ``` ) ``` | source.js meta.function.js meta.parameters.js punctuation.definition.parameters.end.js |
| ```   ``` | source.js meta.function.js |
| ``` { ``` | source.js meta.function.js meta.block.js punctuation.definition.block.js |

**134:** ```    return (s + ' '.repeat(w)).substr(0, w);```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` return ``` | source.js meta.function.js meta.block.js keyword.control.flow.js |
| ```   ``` | source.js meta.function.js meta.block.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` s ``` | source.js meta.function.js meta.block.js variable.other.readwrite.js |
| ```   ``` | source.js meta.function.js meta.block.js |
| ``` + ``` | source.js meta.function.js meta.block.js keyword.operator.arithmetic.js |
| ```   ``` | source.js meta.function.js meta.block.js |
| ``` ' ``` | source.js meta.function.js meta.block.js string.quoted.single.js punctuation.definition.string.begin.js |
| ```   ``` | source.js meta.function.js meta.block.js string.quoted.single.js |
| ``` ' ``` | source.js meta.function.js meta.block.js string.quoted.single.js punctuation.definition.string.end.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` repeat ``` | source.js meta.function.js meta.block.js meta.function-call.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` w ``` | source.js meta.function.js meta.block.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` substr ``` | source.js meta.function.js meta.block.js meta.function-call.js support.function.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` 0 ``` | source.js meta.function.js meta.block.js constant.numeric.decimal.js |
| ``` , ``` | source.js meta.function.js meta.block.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.function.js meta.block.js |
| ``` w ``` | source.js meta.function.js meta.block.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**135:** ```}```

| text | scope |
| -- | -- |
| ``` } ``` | source.js meta.function.js meta.block.js punctuation.definition.block.js |

**136:** ```function trimMid(s, w) {```

| text | scope |
| -- | -- |
| ``` function ``` | source.js meta.function.js storage.type.function.js |
| ```   ``` | source.js meta.function.js |
| ``` trimMid ``` | source.js meta.function.js meta.definition.function.js entity.name.function.js |
| ``` ( ``` | source.js meta.function.js meta.parameters.js punctuation.definition.parameters.begin.js |
| ``` s ``` | source.js meta.function.js meta.parameters.js variable.parameter.js |
| ``` , ``` | source.js meta.function.js meta.parameters.js punctuation.separator.parameter.js |
| ```   ``` | source.js meta.function.js meta.parameters.js |
| ``` w ``` | source.js meta.function.js meta.parameters.js variable.parameter.js |
| ``` ) ``` | source.js meta.function.js meta.parameters.js punctuation.definition.parameters.end.js |
| ```   ``` | source.js meta.function.js |
| ``` { ``` | source.js meta.function.js meta.block.js punctuation.definition.block.js |

**137:** ```    if (s.length <= w) {```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` if ``` | source.js meta.function.js meta.block.js keyword.control.conditional.js |
| ```   ``` | source.js meta.function.js meta.block.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` s ``` | source.js meta.function.js meta.block.js variable.other.object.js |
| ``` . ``` | source.js meta.function.js meta.block.js punctuation.accessor.js |
| ``` length ``` | source.js meta.function.js meta.block.js support.variable.property.js |
| ```   ``` | source.js meta.function.js meta.block.js |
| ``` <= ``` | source.js meta.function.js meta.block.js keyword.operator.relational.js |
| ```   ``` | source.js meta.function.js meta.block.js |
| ``` w ``` | source.js meta.function.js meta.block.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ```   ``` | source.js meta.function.js meta.block.js |
| ``` { ``` | source.js meta.function.js meta.block.js meta.block.js punctuation.definition.block.js |

**138:** ```        return s;```

| text | scope |
| -- | -- |
| ```          ``` | source.js meta.function.js meta.block.js meta.block.js |
| ``` return ``` | source.js meta.function.js meta.block.js meta.block.js keyword.control.flow.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.block.js |
| ``` s ``` | source.js meta.function.js meta.block.js meta.block.js variable.other.readwrite.js |
| ``` ; ``` | source.js meta.function.js meta.block.js meta.block.js punctuation.terminator.statement.js |

**139:** ```    }```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js meta.block.js |
| ``` } ``` | source.js meta.function.js meta.block.js meta.block.js punctuation.definition.block.js |

**140:** ```    const l = Math.floor((w - 3) / 2);```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` const ``` | source.js meta.function.js meta.block.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` l ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.function.js meta.block.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` Math ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js support.constant.math.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js punctuation.accessor.js |
| ``` floor ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js support.function.math.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` w ``` | source.js meta.function.js meta.block.js meta.var.expr.js variable.other.readwrite.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` - ``` | source.js meta.function.js meta.block.js meta.var.expr.js keyword.operator.arithmetic.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` 3 ``` | source.js meta.function.js meta.block.js meta.var.expr.js constant.numeric.decimal.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` / ``` | source.js meta.function.js meta.block.js meta.var.expr.js keyword.operator.arithmetic.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` 2 ``` | source.js meta.function.js meta.block.js meta.var.expr.js constant.numeric.decimal.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**141:** ```    const r = Math.ceil((w - 3) / 2);```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` const ``` | source.js meta.function.js meta.block.js meta.var.expr.js storage.type.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` r ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js meta.definition.variable.js variable.other.readwrite.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.var-single-variable.expr.js |
| ``` = ``` | source.js meta.function.js meta.block.js meta.var.expr.js keyword.operator.assignment.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` Math ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js support.constant.math.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js punctuation.accessor.js |
| ``` ceil ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.function-call.js support.function.math.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` w ``` | source.js meta.function.js meta.block.js meta.var.expr.js variable.other.readwrite.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` - ``` | source.js meta.function.js meta.block.js meta.var.expr.js keyword.operator.arithmetic.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` 3 ``` | source.js meta.function.js meta.block.js meta.var.expr.js constant.numeric.decimal.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` / ``` | source.js meta.function.js meta.block.js meta.var.expr.js keyword.operator.arithmetic.js |
| ```   ``` | source.js meta.function.js meta.block.js meta.var.expr.js |
| ``` 2 ``` | source.js meta.function.js meta.block.js meta.var.expr.js constant.numeric.decimal.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.var.expr.js meta.brace.round.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**142:** ```    return s.substr(0, l) + '...' + s.substr(-r);```

| text | scope |
| -- | -- |
| ```      ``` | source.js meta.function.js meta.block.js |
| ``` return ``` | source.js meta.function.js meta.block.js keyword.control.flow.js |
| ```   ``` | source.js meta.function.js meta.block.js |
| ``` s ``` | source.js meta.function.js meta.block.js meta.function-call.js variable.other.object.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` substr ``` | source.js meta.function.js meta.block.js meta.function-call.js support.function.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` 0 ``` | source.js meta.function.js meta.block.js constant.numeric.decimal.js |
| ``` , ``` | source.js meta.function.js meta.block.js punctuation.separator.comma.js |
| ```   ``` | source.js meta.function.js meta.block.js |
| ``` l ``` | source.js meta.function.js meta.block.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ```   ``` | source.js meta.function.js meta.block.js |
| ``` + ``` | source.js meta.function.js meta.block.js keyword.operator.arithmetic.js |
| ```   ``` | source.js meta.function.js meta.block.js |
| ``` ' ``` | source.js meta.function.js meta.block.js string.quoted.single.js punctuation.definition.string.begin.js |
| ``` ... ``` | source.js meta.function.js meta.block.js string.quoted.single.js |
| ``` ' ``` | source.js meta.function.js meta.block.js string.quoted.single.js punctuation.definition.string.end.js |
| ```   ``` | source.js meta.function.js meta.block.js |
| ``` + ``` | source.js meta.function.js meta.block.js keyword.operator.arithmetic.js |
| ```   ``` | source.js meta.function.js meta.block.js |
| ``` s ``` | source.js meta.function.js meta.block.js meta.function-call.js variable.other.object.js |
| ``` . ``` | source.js meta.function.js meta.block.js meta.function-call.js punctuation.accessor.js |
| ``` substr ``` | source.js meta.function.js meta.block.js meta.function-call.js support.function.js |
| ``` ( ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` - ``` | source.js meta.function.js meta.block.js keyword.operator.arithmetic.js |
| ``` r ``` | source.js meta.function.js meta.block.js variable.other.readwrite.js |
| ``` ) ``` | source.js meta.function.js meta.block.js meta.brace.round.js |
| ``` ; ``` | source.js meta.function.js meta.block.js punctuation.terminator.statement.js |

**143:** ```}```

| text | scope |
| -- | -- |
| ``` } ``` | source.js meta.function.js meta.block.js punctuation.definition.block.js |

**144:** ```//# sourceMappingURL=app.js.map```

| text | scope |
| -- | -- |
| ``` // ``` | source.js comment.line.double-slash.js punctuation.definition.comment.js |
| ``` # sourceMappingURL=app.js.map ``` | source.js comment.line.double-slash.js |

