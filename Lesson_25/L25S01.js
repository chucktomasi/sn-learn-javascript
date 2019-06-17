//
// L25S01 - ArrayUtil
//
var au = new ArrayUtil();
var names = [
  "Eric",
  "Donna",
  "Melanie",
  "Jessie",
  "Howard",
  "Eric",
  "Jessie",
  "Tomasz"
];
var newNames = au.unique(names);
gs.info(newNames.join(', '));