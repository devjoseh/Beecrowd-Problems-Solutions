var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift())

var fib_sequence = [0,1]

while(fib_sequence.length < valor) {
    fib_sequence.push(fib_sequence[fib_sequence.length - 1] + fib_sequence[fib_sequence.length - 2]);
}

console.log(fib_sequence.join(" "))