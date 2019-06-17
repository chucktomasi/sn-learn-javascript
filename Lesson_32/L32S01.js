//
// L32S01 - Recursion
//
function factorial(x) {

  // TERMINATION
  if (x < 0)
    return;

  // BASE
  if (x === 0)
    return 1;

  // RECURSION
  return x * factorial(x - 1);
}
gs.info(factorial(3)); // 6