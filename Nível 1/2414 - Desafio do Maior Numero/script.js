var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const numeros = lines.shift()
  .split(' ')
  .map(Number)
  .filter(num => num !== 0);

const maior = Math.max(...numeros);
console.log(maior);