var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(" ")

var c1 = parseInt(valores[0])
var c2 = parseInt(valores[1])
var c3 = parseInt(valores[2])
var c4 = parseInt(valores[3])

if (c1 == 1 && c2 == 0 && c3 == 0 && c4 == 0) {
    console.log("1")
} else if (c1 == 0 && c2 == 1 && c3 == 0 && c4 == 0) {
    console.log("2")
} else if (c1 == 0 && c2 == 0 && c3 == 1 && c4 == 0) {
    console.log("3")
} else if (c1 == 0 && c2 == 0 && c3 == 0 && c4 == 1) {
    console.log("4")
} else {
    console.log("Erro")
}