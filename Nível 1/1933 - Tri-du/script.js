var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(" ")

var x1 = parseInt(valores[0])
var x2 = parseInt(valores[1])

if (x1 > x2) {
    console.log(x1)
} else if (x2 > x1) {
    console.log(x2)
} else if (x1 == x2) {
    console.log(x1)
} else {
    console.log("Erro")
}