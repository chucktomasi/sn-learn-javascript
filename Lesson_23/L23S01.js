//
// L23S01 forEach with external function
//
var list = [1, 3, 5];

list.forEach(myFunction);

function myFunction(item) {
  gs.info('myFunction item=' + item);
}
