var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift())
var fatorial = 1

for (let i = 1; i <= valor; i++) {
    fatorial *= i
}

console.log(fatorial)