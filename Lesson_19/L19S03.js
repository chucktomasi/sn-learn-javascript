//
// L19S03 - Function with a return value
//
function toCelsius(fahrenheit) {

    return (5 / 9) * (fahrenheit - 32);

}
var c = toCelsius(32);
gs.info(c);
c = toCelsius(212);
gs.info(c);