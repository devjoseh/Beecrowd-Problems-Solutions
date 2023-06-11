var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift())

for (let i = 1; i <= valor; i++) {
  if (valor % i === 0) {
    console.log(i)
  }
}