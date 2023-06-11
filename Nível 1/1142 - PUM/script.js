var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numero = parseInt(lines.shift())
var valor = 1

for(let i = 1; i <= numero; i++) {
    console.log(`${valor} ${valor+1} ${valor+2} PUM`)
    valor = valor + 4
}