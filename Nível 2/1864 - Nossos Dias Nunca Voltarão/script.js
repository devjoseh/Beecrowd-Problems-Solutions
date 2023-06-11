var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var texto = "LIFE IS NOT A PROBLEM TO BE SOLVED"

var quantidade = parseInt(lines.shift())

console.log(texto.substring(0, quantidade));