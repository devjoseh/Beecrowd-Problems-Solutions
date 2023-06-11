var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valorA = parseInt(lines.shift());
var valorB = parseInt(lines.shift());
var valorC = parseInt(lines.shift());
var valorD = parseInt(lines.shift());

var calculo = valorA * valorB - valorC * valorD

console.log(`DIFERENCA = ${calculo}`)