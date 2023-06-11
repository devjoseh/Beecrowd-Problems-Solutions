var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift())

formula = ((valor+1)*(valor+2))/2

console.log(formula)