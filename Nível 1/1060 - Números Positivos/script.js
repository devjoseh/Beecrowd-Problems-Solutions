var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var quantia = 6
var positivos = 0

for(let i = 1; i <= quantia; i++) {
    var valor = parseFloat(lines.shift())

    if (valor >= 0) {
        positivos += 1
    }
}

console.log(`${positivos} valores positivos`)