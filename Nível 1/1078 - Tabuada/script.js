var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift())

coluna1 = 1 * valor
coluna2 = 2 * valor
coluna3 = 3 * valor
coluna4 = 4 * valor
coluna5 = 5 * valor
coluna6 = 6 * valor
coluna7 = 7 * valor
coluna8 = 8 * valor
coluna9 = 9 * valor
coluna10 = 10 * valor

console.log(`1 x ${valor} = ${coluna1}`)
console.log(`2 x ${valor} = ${coluna2}`)
console.log(`3 x ${valor} = ${coluna3}`)
console.log(`4 x ${valor} = ${coluna4}`)
console.log(`5 x ${valor} = ${coluna5}`)
console.log(`6 x ${valor} = ${coluna6}`)
console.log(`7 x ${valor} = ${coluna7}`)
console.log(`8 x ${valor} = ${coluna8}`)
console.log(`9 x ${valor} = ${coluna9}`)
console.log(`10 x ${valor} = ${coluna10}`)