var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var alcool = 0
var gasolina = 0
var diesel = 0
var valor = 0

while (valor != 4) {
    var valor = parseInt(lines.shift())

    if (valor == 1) {
        var alcool = alcool + 1
    } 
    if (valor == 2) {
        var gasolina = gasolina + 1
    }
    if (valor == 3) {
        var diesel = diesel + 1
    }
}

console.log("MUITO OBRIGADO")
console.log(`Alcool: ${alcool}`)
console.log(`Gasolina: ${gasolina}`)
console.log(`Diesel: ${diesel}`)