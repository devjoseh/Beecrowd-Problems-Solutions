var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var ingredientes = lines.shift().split(" ")

var trigo = parseInt(ingredientes[0])
var ovo = parseInt(ingredientes[1])
var leite = parseInt(ingredientes[2])

console.log(Math.min(Math.floor(trigo / 2), Math.floor(ovo / 3), Math.floor(leite / 5)));