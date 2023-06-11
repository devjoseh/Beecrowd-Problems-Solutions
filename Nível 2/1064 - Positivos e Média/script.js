var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let quantia = 6
var positivos = 0
var nmrsPosi = []
var media = 0

for (var i = 1; i <= quantia; i++) {
    var valor = parseFloat(lines.shift())

    if (valor >= 0) {
        positivos += 1
        nmrsPosi.push(valor)
    }
}

for (valor of nmrsPosi) {
    media += valor
}

calculo = media / positivos

console.log(`${positivos} valores positivos`)
console.log(`${calculo}`)