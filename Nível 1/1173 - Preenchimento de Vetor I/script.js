var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var inicial = 0
var valor = parseInt(lines.shift())

for (let i = 1; i <= 10; i++) {
    console.log(`N[${inicial}] = ${valor}`)

    valor *= 2
    inicial += 1
}