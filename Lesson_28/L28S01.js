//
// L28S01 - Get object keys
//
var vehicle = {
  "year" : 2018,
  "make"  : "Toyota",
  "model" : "Sienna"
};
for (var key in vehicle) {
  gs.info('key=' + key + ' value=' + vehicle[key]);
}