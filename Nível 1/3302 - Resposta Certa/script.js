var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var quantidade = parseInt(lines.shift())
var resposta = 1

for (var resposta=1; resposta<=quantidade;)  {
    var nota = parseInt(lines.shift())
	console.log(`resposta ${resposta}: ${nota}`);
    resposta++
}