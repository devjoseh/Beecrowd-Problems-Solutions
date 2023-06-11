var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift())

for (let i = 1; i <= valor; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}