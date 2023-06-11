var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift())

var isin = 0
var isout = 0

for (let i = 1; i <= valor; i++) {
    var numero = parseInt(lines.shift())

    if (numero >= 10 && numero <= 20) {
        isin += 1
    } else {
        isout += 1
    }
}

console.log(`${isin} in`)
console.log(`${isout} out`)