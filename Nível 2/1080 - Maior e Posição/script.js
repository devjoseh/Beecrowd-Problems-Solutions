var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var listaNumeros = []

for (let i = 1; i <= 100; i++) {
    var valor = parseInt(lines.shift())

    listaNumeros.push(valor)
}

console.log(Math.max(...listaNumeros))
console.log(listaNumeros.indexOf(Math.max(...listaNumeros)) + 1)