//
// L22S03 - Loops and arrays
//
var list = [1, 3, 5];
for (var i = 0; i < list.length; i++) {
  gs.info('i=' + i + ' value=' + list[i]);
}

// Slightly better
var list = [1, 3, 5];
var len = list.length;
for (var i = 0; i < len; i++) {
  gs.info('i=' + i + ' value=' + list[i]);
}