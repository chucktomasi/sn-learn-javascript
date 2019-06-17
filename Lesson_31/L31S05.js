//
// L31S05 - Using toUpper or toLower for better matching
//
var firstName = 'Chuck';
var loginName = 'chuck';
gs.info('firstName=' + firstName.toUpperCase() + ' loginName=' + loginName.toUpperCase());
if (loginName.toUpperCase() == firstName.toUpperCase()) {
  gs.info('names match');
} else {
  gs.info('names do not match');
}