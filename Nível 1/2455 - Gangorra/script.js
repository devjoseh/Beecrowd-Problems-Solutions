var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = lines.shift().split(" ")

var crianca1 = parseInt(valor[0])
var comprimento1 = parseInt(valor[1])
var crianca2 = parseInt(valor[2])
var comprimento2 = parseInt(valor[3])

var calc1 = crianca1 * comprimento1
var calc2 = crianca2 * comprimento2

var formula = calc2 - calc1

if (formula == 0) {
    console.log("0")
} else if (formula > 0 ) {
    console.log("1" )
} else if (formula < 0) {
    console.log("-1")
} else {
    console.log("erro")
}