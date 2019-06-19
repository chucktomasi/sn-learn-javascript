//
// L12S01 - The ternary operator
//
// Could have written...
var valveOpen = true;
var openStatusString;
if (valveOpen)
  openStatusString = 'open';
else
  openStatusString = 'closed';
  gs.info('1: Valve is currently ' + openStatusString);

// Introducing a shortcut way...
var openStatusString = (valveOpen) ? 'open' : 'closed';
gs.info('2: Valve is currently ' + openStatusString);