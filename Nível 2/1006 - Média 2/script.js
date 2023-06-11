var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nota1 = parseFloat(lines.shift().trim())
var nota2 = parseFloat(lines.shift().trim())
var nota3 = parseFloat(lines.shift().trim())

var valorA = 2
var valorB = 3
var valorC = 5

var media1 = valorA * nota1
var media2 = valorB * nota2
var media3 = valorC * nota3

var mediaFinal = (media1 + media2 + media3) / 10

console.log(`MEDIA = ${mediaFinal.toFixed(1)}`)