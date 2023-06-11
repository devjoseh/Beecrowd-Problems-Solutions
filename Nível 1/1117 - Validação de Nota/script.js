var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valoresLidos = 0
var media = 0

while (valoresLidos != 2) {
    var valor = parseFloat(lines.shift())

    if (valor < 0 || valor > 10) {
        console.log("nota invalida")
    } else {
        valoresLidos += 1
        media += valor
    }
}

var calc = media / 2
console.log(`media = ${calc.toFixed(2)}`)