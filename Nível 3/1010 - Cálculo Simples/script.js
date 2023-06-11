var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var infosProdutos1 = lines.shift()
var infosProdutos2 = lines.shift()

var valores1 = infosProdutos1.split(" ");
var valores2 = infosProdutos2.split(" ");

var pecasProduto1 = parseFloat(valores1[1])
var pecasProduto2 = parseFloat(valores2[1])

var valorProduto1 = parseFloat(valores1[2])
var valorProduto2 = parseFloat(valores2[2])

var calculo1 = pecasProduto1 * valorProduto1
var calculo2 = pecasProduto2 * valorProduto2

var resultadoFinal = calculo1 + calculo2

console.log(`VALOR A PAGAR: R$ ${resultadoFinal.toFixed(2)}`)