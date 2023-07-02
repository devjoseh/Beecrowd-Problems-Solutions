var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [x1, x2, x3, x4] = lines.shift().split(" ").map(Number)

var calc = ((x1 + x2 + x3) - 3) + x4

console.log(calc)