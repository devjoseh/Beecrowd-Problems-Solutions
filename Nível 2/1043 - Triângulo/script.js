var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(" ")

var a = parseFloat(valores[0])
var b = parseFloat(valores[1])
var c = parseFloat(valores[2])

var perimetro = a + b + c

if (a < b + c && b < a + c && c < a + b){
    console.log(`Perimetro = ${perimetro.toFixed(1)}`)
} else {
    var area = ((a + b) / 2) * c
    console.log(`Area = ${area.toFixed(1)}`)
}