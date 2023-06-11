var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift())

if (valor % 2 == 0) {
    valor += 1
}

for (let i = 1; i <= 6; i++) {
    console.log(valor)
    valor += 2
}