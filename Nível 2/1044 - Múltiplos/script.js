var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

function isFloat(numero) {
    if(!isNaN(numero)) {
        if(parseInt(numero) != parseFloat(numero)) {
            return true
        }
    }
    return false
}

var numeros = lines.shift()
var valores = numeros.split(" ")

var numero1 = parseInt(valores[0])
var numero2 = parseInt(valores[1])

calculo = numero2 / numero1

if(isFloat(calculo) === false) {
    console.log("Sao Multiplos")
} else {
    console.log("Nao sao Multiplos")
}