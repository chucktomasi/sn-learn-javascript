//
// L19S05 - Global variables and local
//
var convertTo = 'F';

function toCelsius(f) {

    var c = (5 / 9) * (f - 32);
        
    return c;
}

function toFahrenheit(c) {

    var f = c * 9 / 5 + 32;
        
    return f;
}

function convertTemp(temp) {

  // use the global variable to determine conversion
  if (convertTo == 'C') {
    return toCelsius(temp);
  } else {
    return toFahrenheit(temp);
  }
}

gs.info(convertTemp(100));