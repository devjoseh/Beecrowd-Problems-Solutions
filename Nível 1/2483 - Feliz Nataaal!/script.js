var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift())
var string = "a"

var calculo = string.repeat(valor)

console.log(`Feliz nat${calculo}l!`)