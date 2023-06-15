var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var renas = ['Dasher', 'Dancer', 'Prancer', 'Vixen', 'Comet', 'Cupid', 'Donner', 'Blitzen', 'Rudolph']

const dados = lines.shift().split(" ").map(Number)
const soma = dados.reduce((acc, cur) => acc + cur, 0)

let i = 0
for (let j = 1; j <= soma; j++) {
  if (i == 8) {
    i = 0
  } else {
    i += 1
  }
}

if (i == 0) {
    console.log(renas[8])
} else {
    console.log(renas[i - 1])
}