var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor1 = parseInt(lines.shift())
var valor2 = parseInt(lines.shift())
var valor3 = parseInt(lines.shift())
var valor4 = parseInt(lines.shift())
var valor5 = parseInt(lines.shift())

var curupira = 300
var boitata = 1500
var boto = 600
var mapinguari = 1000
var iara = 150
var chica = 225

var calculo = (curupira * valor1) + (boitata * valor2) + (boto * valor3) + (mapinguari * valor4) + (iara * valor5) + chica

console.log(calculo)