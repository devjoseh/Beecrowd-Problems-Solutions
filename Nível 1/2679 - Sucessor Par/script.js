var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

numero = parseInt(lines.shift())

if (numero % 2 == 0) {
    console.log(numero+2)
} else {
    console.log(numero+1)
}