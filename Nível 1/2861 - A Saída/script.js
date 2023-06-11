var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var quantia = parseInt(lines.shift())
var texto = "gzuz"

for(i = 1; i <= quantia; i++) {
    var pergunta = lines.shift()
    console.log(texto)
}