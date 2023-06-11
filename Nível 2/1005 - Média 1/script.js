var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nota1 = parseFloat(lines.shift())
var nota2 = parseFloat(lines.shift())

var valorA = 3.5
var valorB = 7.5

var media1 = valorA * nota1
var media2 = valorB * nota2

var mediaFinal = (media1 + media2) / 11

console.log(`MEDIA = ${mediaFinal.toFixed(5)}`)