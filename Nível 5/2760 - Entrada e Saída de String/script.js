var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const x1 = lines.shift().trim()
const x2 = lines.shift().trim()
const x3 = lines.shift().trim()

console.log(x1+x2+x3)
console.log(x2+x3+x1)
console.log(x3+x1+x2)
console.log(x1.substring(0, 10)+x2.substring(0, 10)+x3.substring(0, 10));