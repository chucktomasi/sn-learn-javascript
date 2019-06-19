//
// Lab 3
//
// Create a three string variables.
// Print the length of each string
// concatenate them together with a new line character and save to a new variable
// Print the new variable and length of the new variable
//
var string1 = 'Chuck';
var string2 = 'Tomasi';
var string3 = 'JavaScript';
gs.info('length1 = ' + string1.length);
gs.info('length2 = ' + string2.length);
gs.info('length3 = ' + string3.length);

var allStrings = string1 + '\n' + string2 + '\n' + string3;
gs.info('allStrings=' + allStrings);
gs.info('length of allStrings=' + allStrings.length);

/*
Output from Scripts - background

*** Script: length1 = 5
*** Script: length2 = 6
*** Script: length3 = 10
*** Script: allStrings=Chuck
Tomasi
JavaScript
*** Script: length of allStrings=23
*/