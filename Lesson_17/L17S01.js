//
// L17S01 - do-while
//
var i = 0;
gs.info('start');
do {
  gs.info('i=' + i);
  ++i;
} while (i < 5);
gs.info('done i=' + i);