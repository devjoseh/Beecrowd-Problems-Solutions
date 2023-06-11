var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var quantidade = 0
var idades = 0

while (true) {

    var valor = parseFloat(lines.shift())

    if (valor < 0) {
        break;
    } else {
        var quantidade = quantidade + 1
        var idades = idades + valor
    }
}

var calculo = idades / quantidade

console.log(`${calculo.toFixed(2)}`)

