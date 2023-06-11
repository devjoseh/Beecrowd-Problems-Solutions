var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numero = parseFloat(lines.shift())

pi = 6.28

calculo = numero * pi 

console.log(`${calculo.toFixed(2)}`)