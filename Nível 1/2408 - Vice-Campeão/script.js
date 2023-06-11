var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const numeros = lines.shift()
  .split(" ")
  .map(Number)
  .filter(num => num !== 0);

var maior = Math.max(...numeros);

function removeValue(value, index, arr) {
    if (value === maior) {
        arr.splice(index, 1);
        return true;
    }
    return false;
}

numeros.filter(removeValue);

var maior = Math.max(...numeros);
console.log(maior)