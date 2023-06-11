var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numero = parseInt(lines.shift())
var valor = 1

for (i = 1; i <= numero; i++) {
    console.log(`${valor} ${valor*valor} ${valor*valor*valor}`)
    valor += 1
}