var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift())

console.log(valor)

var cedula100 = Math.floor(valor / 100);
var valor = valor - cedula100 * 100

var cedula50 = Math.floor(valor / 50);
var valor = valor - cedula50 * 50

var cedula20 = Math.floor(valor / 20);
var valor = valor - cedula20 * 20

var cedula10 = Math.floor(valor / 10);
var valor = valor - cedula10 * 10

var cedula5 = Math.floor(valor / 5);
var valor = valor - cedula5 * 5

var cedula2 = Math.floor(valor / 2);
var valor = valor - cedula2 * 2

var cedula1 = Math.floor(valor / 1);
var valor = valor - cedula1 * 1

console.log(`${cedula100} nota(s) de R$ 100,00`)
console.log(`${cedula50} nota(s) de R$ 50,00`)
console.log(`${cedula20} nota(s) de R$ 20,00`)
console.log(`${cedula10} nota(s) de R$ 10,00`)
console.log(`${cedula5} nota(s) de R$ 5,00`)
console.log(`${cedula2} nota(s) de R$ 2,00`)
console.log(`${cedula1} nota(s) de R$ 1,00`)