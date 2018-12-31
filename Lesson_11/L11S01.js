//
// S11S01 - If Statements
//
var a = 1;
var b = 3;
var c = 5;
if (a < b)
  gs.info('a is less than b');

// else
if (a < b)
  gs.info('a is less than b');
else
  gs.info('a is greater than or equal to b');

// Else if and else
if (a < b)
  gs.info('a is less than b');
else if (a > b)
  gs.info('a is greater than b');
else if (a == b)
  gs.info('a equals b');
else
  gs.info('Uh-oh');

if (a < b)
  if (b < c)
      gs.info('a b c are in order');