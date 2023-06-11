var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseFloat(lines.shift())

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
var cedula1 = parseFloat(`${cedula1.toFixed(2)}`)
var valor = parseFloat(`${valor.toFixed(2)}`)

var moeda50 = Math.floor(valor / 0.5);
var valor = valor - moeda50 * 0.5
var moeda50 = parseFloat(`${moeda50.toFixed(2)}`)
var valor = parseFloat(`${valor.toFixed(2)}`)

var moeda25 = Math.floor(valor / 0.25);
var valor = valor - moeda25 * 0.25
var moeda25 = parseFloat(`${moeda25.toFixed(2)}`)
var valor = parseFloat(`${valor.toFixed(2)}`)

var moeda10 = Math.floor(valor / 0.10);
var valor = valor - moeda10 * 0.10
var moeda10 = parseFloat(`${moeda10.toFixed(2)}`)
var valor = parseFloat(`${valor.toFixed(2)}`)

var moeda5 = Math.floor(valor / 0.05);
var valor = valor - moeda5 * 0.05
var moeda5 = parseFloat(`${moeda5.toFixed(2)}`)
var valor = parseFloat(`${valor.toFixed(2)}`)

var moeda1 = valor * 100
var moeda1 = parseFloat(`${moeda1.toFixed(2)}`)
var valor = parseFloat(`${valor.toFixed(2)}`)

console.log(`NOTAS:`)
console.log(`${cedula100} nota(s) de R$ 100.00`)
console.log(`${cedula50} nota(s) de R$ 50.00`)
console.log(`${cedula20} nota(s) de R$ 20.00`)
console.log(`${cedula10} nota(s) de R$ 10.00`)
console.log(`${cedula5} nota(s) de R$ 5.00`)
console.log(`${cedula2} nota(s) de R$ 2.00`)
console.log(`MOEDAS:`)
console.log(`${cedula1} moeda(s) de R$ 1.00`)
console.log(`${moeda50} moeda(s) de R$ 0.50`)
console.log(`${moeda25} moeda(s) de R$ 0.25`)
console.log(`${moeda10} moeda(s) de R$ 0.10`)
console.log(`${moeda5} moeda(s) de R$ 0.05`)
console.log(`${moeda1} moeda(s) de R$ 0.01`)