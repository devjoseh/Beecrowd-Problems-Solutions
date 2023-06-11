var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split("/")

var x1 = valores[0]
var x2 = valores[1]
var x3 = valores[2]

console.log(`${x2}/${x1}/${x3}`)
console.log(`${x3}/${x2}/${x1}`)
console.log(`${x1}-${x2}-${x3}`)