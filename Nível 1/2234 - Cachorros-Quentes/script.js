var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = lines.shift().split(" ")

var x1 = parseInt(valor[0])
var x2 = parseInt(valor[1])

var calc = x1 / x2

console.log(calc.toFixed(2))