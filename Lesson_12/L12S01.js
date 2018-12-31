//
// L12S01 - The ternary operator
//
// Could have written...
var openStatusString;
if (valveOpen)
  openStatusString = 'open';
else
  openStatusString = 'closed';

// Introducing a shortcut way...
var openStatusString = (valveOpen) ? 'open' : 'closed';
gs.info('Valve is currently ' + openStatusString);

// Or without a variable...
gs.info('Valve is currently ' + (valveOpen) ? 'open' : 'closed');