var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift())
var resposta = lines.shift().split(" ")
var competidores = 0

if (parseInt(resposta[0]) == valor) {
    competidores += 1
}

if (parseInt(resposta[1]) == valor) {
    competidores += 1
}

if (parseInt(resposta[2]) == valor) {
    competidores += 1
}

if (parseInt(resposta[3]) == valor) {
    competidores += 1
}

if (parseInt(resposta[4]) == valor) {
    competidores += 1
}

console.log(competidores)