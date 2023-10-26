var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift())
valor--
var digito = 0

for(var i = 0; i <= 999; i++) {
    console.log(`N[${i}] = ${digito}`)
    digito++
    if(digito > valor) { digito = 0}
}