var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = lines.shift()
var valores = valor.replace("-", ".").split(".")

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])