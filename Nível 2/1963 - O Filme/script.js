var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = lines.shift().split(" ")

var x1 = parseFloat(valor[0])
var x2 = parseFloat(valor[1])

var calculo = ((x2 - x1) / x1) * 100

console.log(`${calculo.toFixed(2)}%`)