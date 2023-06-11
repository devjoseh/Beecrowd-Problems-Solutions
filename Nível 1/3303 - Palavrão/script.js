var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var texto = lines.shift()

if (texto.length >= 10) {
    console.log("palavrao")
} else {
    console.log("palavrinha")
}