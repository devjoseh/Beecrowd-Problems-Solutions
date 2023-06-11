var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const dados = lines.shift().split(" ")
var vI = parseInt(dados[0])
const trocas = parseInt(dados[1])

var mudancas = lines.shift().split(" ").map(Number)

for (let valor of mudancas) {
    vI += parseInt(valor)

    if (vI > 100) {
        vI = 100
    } else if (vI < 0) {
        vI = 0
    }
}

console.log(vI)