//
// L15S02 - breaking out of a while loop
//
var i = 0;
while (true) {
  if (i == 5)
    break;
  gs.info(i);
  ++i;
}
gs.info('done');