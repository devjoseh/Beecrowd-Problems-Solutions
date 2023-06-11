var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = lines.shift().split(" ")

var numero1 = parseInt(valor[0])
var numero2 = parseInt(valor[1])
var numero3 = parseInt(valor[2])

var formula = (numero1 + numero2 + Math.abs(numero1 - numero2)) / 2
var resultado = (formula + numero3 + Math.abs(formula - numero3)) / 2

console.log(`${resultado} eh o maior`)