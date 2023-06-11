var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor1 = parseInt(lines.shift())
var valor2 = parseInt(lines.shift())

var calculo = valor1 - valor2

console.log(calculo)