var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var username = lines.shift().trim()
var salarioFixo = parseFloat(lines.shift().trim())
var totalVendas = parseFloat(lines.shift().trim())

var quantiaVendas = totalVendas * 0.15
var salarioFinal = quantiaVendas + salarioFixo

console.log(`TOTAL = R$ ${salarioFinal.toFixed(2)}`)