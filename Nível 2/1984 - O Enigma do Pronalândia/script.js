var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var texto = parseInt(lines.shift())

var texto = texto.toString()

let textoInvertido = texto.split("").reverse().join("");

console.log(textoInvertido)