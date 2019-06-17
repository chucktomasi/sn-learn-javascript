//
// L27S01 - hasOwnProperty
//
var vehicle = {
  "year" : 2018,
  "make"  : "Toyota",
  "model" : "Sienna"
};
gs.info(vehicle.hasOwnProperty("year"));  // <== true
gs.info(vehicle.hasOwnProperty("price")); // <== false