//
// L06S01 - Strings
//
var firstName = "Chuck";
var lastName  = 'Tomasi';  // Either is ok
var myCar     = "Chuck's Car";  // Mix them to avoid issues

// Note the use of + when strings are involved
var name = firstName + ' ' + lastName;
gs.info(name);
gs.info('length of name=' + name.length);