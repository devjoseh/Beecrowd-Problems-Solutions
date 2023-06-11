var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var informacao1 = lines.shift().split(" ")
var informacao2 = lines.shift().split(" ")

var x1 = parseFloat(informacao1[0])
var y1 = parseFloat(informacao1[1])

var x2 = parseFloat(informacao2[0])
var y2 = parseFloat(informacao2[1])

var calculo1 = (x2 - x1) ** 2;
var calculo2 = (y2 - y1) ** 2;
var calculo3 = calculo1 + calculo2
var raiz = Math.sqrt(calculo3)

console.log(`${raiz.toFixed(4)}`)