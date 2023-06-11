var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = lines.shift().split(" ")

var x1 = parseInt(valor[0])
var x2 = parseInt(valor[1])
var x3 = parseInt(valor[2])

var calc = x1 + x2 + x3

if (calc >= 0 && calc <= 23) {
    console.log(calc)
} else if (calc > 24) {
    calc = calc - 24
    console.log(calc)
} else if (calc < 0) {
    calc = Math.abs(calc)
    calc = 24 - calc 
    console.log(calc)
}