var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x1 = lines.shift().trim()
var x2 = lines.shift().trim()
var x3 = lines.shift().trim()

console.log(`A = ${x1}, B = ${x2}, C = ${x3}`)
console.log(`A = ${x2}, B = ${x3}, C = ${x1}`)
console.log(`A = ${x3}, B = ${x1}, C = ${x2}`)
