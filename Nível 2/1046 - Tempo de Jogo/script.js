var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = lines.shift()
var valores = valor.split(" ")

var x1 = parseInt(valores[0])
var x2 = parseInt(valores[1])

if (x1 < x2) {
    var tempo = x2 - x1
} else {
    var tempo = (24 - x1) + x2
}

console.log(`O JOGO DUROU ${tempo} HORA(S)`)