//
// S11S02 - Boolean logic
//
// AND (&&) - both must be true
//      +---------+---------+---------+
//      |   AND   |  true   |  false  |
//      +---------+---------+---------+
//      |  true   |  true   |  false  |
//      +---------+---------+---------+
//      |  false  |  false  |  false  |
//      +---------+---------+---------+
//
// OR (||) - Either must be true
//      +---------+---------+---------+
//      |   OR    |  true   |  false  |
//      +---------+---------+---------+
//      |  true   |  true   |  true   |
//      +---------+---------+---------+
//      |  false  |  true   |  false  |
//      +---------+---------+---------+
//
// NOT (!) - reverse the logic
//      +---------+---------+---------+
//      |   NOT   |  true   |  false  |
//      +---------+---------+---------+
//      |         |  false  |  true   |
//      +---------+---------+---------+
//
var a = 1;
var b = 3;
var c = 5;

if (a < b && b < c)
  gs.info('a b c are in order');

if (b > a || b > c)
  gs.info('b is greater than one of them.');

// Note, indentation can be deceptive!!!
if (a < b)
  if (b < c) {
    gs.info('a b c are in order');
    gs.info(' that means a is less than c');
  }
else
  gs.info('a is greater than or equal to b');

var valveOpen = true;
if (valveOpen == true)
  gs.info('Valve is currently open');

if (bool)
  gs.info('Valve is currently open');

var valveOpen = false;
if (!valveOpen)
  gs.info('Valve is currently closed');