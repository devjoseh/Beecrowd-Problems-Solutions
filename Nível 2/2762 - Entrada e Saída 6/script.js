var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var texto = lines.shift().split(".")

console.log(`${parseInt(texto[1])}.${parseInt(texto[0])}`)