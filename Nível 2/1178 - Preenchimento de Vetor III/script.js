var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = 200.0000

for (var i = 0; i <= 99; i++) {
    console.log(`N[${i}] = ${valor.toFixed(4)}`);
    valor /= 2;
}

