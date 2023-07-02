var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [x1, x2] = lines.shift().split(" ").map(Number)

console.log(x1 * x2)