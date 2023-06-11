var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x1 = parseInt(lines.shift())
var x2 = parseInt(lines.shift())

var calculo = x1 * x2 / 12

console.log(`${calculo.toFixed(3)}`)