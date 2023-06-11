var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numero = parseInt(lines.shift())

var horas = Math.floor(numero / 60 ** 2) 

var numero = numero - horas * 60 ** 2
var minutos = Math.floor(numero / 60)

var numero = numero - minutos * 60
var segundos = numero

console.log(`${horas}:${minutos}:${segundos}`)