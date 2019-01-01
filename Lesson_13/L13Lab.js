// Lab 4:
// Create a script that takes a string variable "Hello world"
// and translates it to at least 3 different languages
// based on a 'language' variable.
// Make the default language English if a match isn't found.

var language   = 'German';
var fromString = 'Hello world';
var toString   = '';

switch (language) {
    case 'German':
        toString = 'Hallo Welt';
        break;
    case 'French':
        toString = 'Bonjour le monde';
        break;
    case 'Spanish':
        toString = 'Hola Mundo';
        break;
    default:
        toString = 'Hello, world';
}

gs.info(fromString + ' in ' + language + ' ==> ' + toString);

