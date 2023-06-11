var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift())
potencia = 2

for (let i = 2; i <= valor; i += 2) {
    console.log(`${i}^2 = ${i**2}`)
}