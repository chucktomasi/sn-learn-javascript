//
// L24S05 - splice(position, n-remove, value1, value2, ..., valueX) - add/remove elements somewhere in the middle
//
var names = ["Eric", "Donna", "Melanie", "Jessie"];
gs.info(names.join(', '));
names.splice(2, 0, "Cary", "Henri");
gs.info(names.join(', '));