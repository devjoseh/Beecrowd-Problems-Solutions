var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valorA = parseInt(lines.shift());
var valorB = parseInt(lines.shift());

var calculo = valorA + valorB

console.log(`X = ${calculo}`)