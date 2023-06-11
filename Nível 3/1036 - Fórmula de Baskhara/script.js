var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = lines.shift().split(" ")

var x1 = parseFloat(valor[0])
var x2 = parseFloat(valor[1])
var x3 = parseFloat(valor[2])

if (x1 === 0 || (x2 ** 2 - 4 * x1 * x3) < 0) {
    console.log("Impossivel calcular")
} else {
    var valor1 = (- x2 + (x2 ** 2 - 4 * x1 * x3) ** (1/2)) / (2 * x1)
    var valor2 = (- x2 - (x2 ** 2 - 4 * x1 * x3) ** (1/2)) / (2 * x1)

    console.log(`R1 = ${valor1.toFixed(5)}`)
    console.log(`R2 = ${valor2.toFixed(5)}`)
}