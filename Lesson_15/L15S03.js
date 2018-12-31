//
// L15S03 - Continue - jumping back to the while condition
//
var i = 0;
var done = false;
while (!done) {
  if (i < 5) {
    ++i;
    continue;
  }
  done = true;
}