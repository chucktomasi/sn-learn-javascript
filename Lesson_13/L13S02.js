//
// L13S02 - Multiple cases
//
// Using the switch statement
var level = 5;
var message = '';
switch (level) {
  case 0:
    message = 'Empty';
    break;

  case 1:
  case 2:
    message = 'Low';
    break;

  case 3: // Warning - what's wrong with case 3?
    message = 'Medium';
  case 4:
    message = 'High';
    break;

  case 5:
    message = 'Full';
    break;

  default:
    message = 'Uh-oh!';
}
gs.info('Level=' + level + ' status=' + message);