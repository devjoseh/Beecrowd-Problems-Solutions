var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var quantia = parseInt(lines.shift())
const lista = lines.shift().split(" ").map(Number);

var multi2 = 0
var multi3 = 0
var multi4 = 0
var multi5 = 0

lista.forEach(function(valor) {
    if (valor % 2 === 0) {
        multi2 += 1
    }

    if (valor % 3 === 0) {
        multi3 += 1
    }

    if (valor % 4 === 0) {
        multi4 += 1
    }

    if (valor % 5 === 0) {
        multi5 += 1
    }
});

console.log(`${multi2} Multiplo(s) de 2`)
console.log(`${multi3} Multiplo(s) de 3`)
console.log(`${multi4} Multiplo(s) de 4`)
console.log(`${multi5} Multiplo(s) de 5`)