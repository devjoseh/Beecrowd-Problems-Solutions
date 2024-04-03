var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [h1, m1, h2, m2] = lines.shift().split(" ").map(Number)

let minutosInicio = (h1 * 60) + m1
let minutosFim = (h2 * 60) + m2

if (minutosFim <= minutosInicio) {
    minutosFim += 24 * 60
}

let minutosTotais = minutosFim - minutosInicio

let horasTotais = Math.floor(minutosTotais / 60)
minutosTotais = minutosTotais - (horasTotais * 60)

console.log(`O JOGO DUROU ${horasTotais} HORA(S) E ${minutosTotais} MINUTO(S)`)