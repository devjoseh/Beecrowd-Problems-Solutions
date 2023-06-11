var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numero = parseInt(lines.shift())

for(let i = 1; i <= numero; i++) {
    var valores = lines.shift().split(" ")
    var x1 = parseInt(valores[0])
    var x2 = parseInt(valores[1])
    var calc = x2 + x1
    console.log(calc)
}