var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift())

var kms = 0

for (i = 1; i <= valor; i++) {
    var intervaloTempo = lines.shift().split(" ")
    x1 = parseInt(intervaloTempo[0])
    x2 = parseInt(intervaloTempo[1])

    var formula = x1 * x2 
    kms += formula
}

console.log(kms)