var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var texto = lines.shift().split(",")

var x1 = texto[0]
var x2 = texto[1]

console.log(x1)
console.log(x2)