//
// L24S06 -  slice(start, end) - extract part of an array in to another array
//
var names = ["Eric", "Donna", "Melanie", "Jessie", "Howard", "Tomasz"];
gs.info(names.join(', '));
var subNames = names.slice(1, 3); // Get names at positions 1 and 2
gs.info(subNames.join(', '));
