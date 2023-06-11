var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nota = parseInt(lines.shift())
var media = parseInt(lines.shift())

valor1 = media * 2
valor2 = valor1 - nota

console.log(valor2)