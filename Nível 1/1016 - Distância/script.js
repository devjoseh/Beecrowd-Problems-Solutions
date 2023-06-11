var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var minutos = parseInt(lines.shift());

var calculo = minutos * 2

console.log(`${calculo} minutos`)