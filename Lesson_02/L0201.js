//
//  L02S01 - semicolon example
//

// Required:
var i = 0; i++        // <-- semicolon obligatory
                      //     (but optional before newline)
var i = 0             // <-- semicolon optional
    i++               // <-- semicolon optional

// Optional:
var i;                        // variable declaration
i = 5;                        // value assignment
i = i + 1;                    // value assignment
i++;                          // same as above
var x = 9;                    // declaration & assignment
var fun = function() {...};   // var decl., assignmt, and func. defin.
alert("hi");                  // function call

// Avoid
// NO semicolons after }:
if  (...) {...} else {...}
for (...) {...}
while (...) {...}

// BUT:
do {...} while (...);

// function statement: 
function (arg) { /*do this*/ } // NO semicolon after }

// Exception:
for (var i=0; i < 10; i++)  {/*actions*/}       // correct
for (var i=0; i < 10; i++;) {/*actions*/}       // SyntaxError
