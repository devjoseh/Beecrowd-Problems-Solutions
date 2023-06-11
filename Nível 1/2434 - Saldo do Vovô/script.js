var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(" ")

var quantia = parseInt(valores[0])
var dinheiro = parseInt(valores[1])
var lista = []

for(let i = 1; i <= quantia; i++) {
    var transferencia = parseInt(lines.shift())

    if (transferencia < 0) {
        var transferencia = transferencia.toString()
        var transferencia = transferencia.replace("-","")
        var transferencia = parseInt(transferencia)

        dinheiro -= transferencia
        lista.push(dinheiro)
    } else {
        dinheiro += transferencia
        lista.push(dinheiro)
    }
}

console.log(Math.min(...lista))