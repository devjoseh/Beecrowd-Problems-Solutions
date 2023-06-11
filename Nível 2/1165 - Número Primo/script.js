var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

function essaPorraEPrimo(valor) {
    if (valor < 2) {
        return false
    }

    for (let i = 2; i <= valor**0.5; i++) {
        if (valor % i == 0) {
            return false
        }
    }

    return true
}

var quantidade = parseInt(lines.shift())

for (let i = 1; i <= quantidade; i++) {
    var valor = parseInt(lines.shift())

    if (essaPorraEPrimo(valor) == true) {
        console.log(`${valor} eh primo`)
    } else {
        console.log(`${valor} nao eh primo`)
    }
}