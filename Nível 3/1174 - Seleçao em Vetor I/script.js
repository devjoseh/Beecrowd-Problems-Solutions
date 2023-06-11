var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var inicial = 0

for(let i = 1; i <= 100; i++) {
    var valor = parseFloat(lines.shift())

    if (valor <= 10) {
        console.log(`A[${inicial}] = ${valor.toFixed(1)}`)
    }
    inicial += 1
}