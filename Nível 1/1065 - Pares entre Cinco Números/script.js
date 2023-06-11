var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var pares = 0 
var quantia = 5

for (var i = 1; i <= quantia; i++) {
    var valor = parseInt(lines.shift())

    let calculo = valor % 2

    if (calculo == 0) {
        pares += 1
    }
}

console.log(`${pares} valores pares`)