var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var infosProduto = lines.shift()
var valores = infosProduto.split(" ")

var codigoProduto = parseInt(valores[0])
var quantiaProduto = parseInt(valores[1])

var precoProduto1 = 4
var precoProduto2 = 4.5
var precoProduto3 = 5
var precoProduto4 = 2
var precoProduto5 = 1.5

var valorProduto = codigoProduto * quantiaProduto

if (codigoProduto == 1) {
    var valorProduto = precoProduto1 * quantiaProduto
    console.log(`Total: R$ ${valorProduto.toFixed(2)}`)
} else if (codigoProduto == 2) {
    var valorProduto = precoProduto2 * quantiaProduto
    console.log(`Total: R$ ${valorProduto.toFixed(2)}`)
} else if (codigoProduto == 3) {
    var valorProduto = precoProduto3 * quantiaProduto
    console.log(`Total: R$ ${valorProduto.toFixed(2)}`)
} else if (codigoProduto == 4) {
    var valorProduto = precoProduto4 * quantiaProduto
    console.log(`Total: R$ ${valorProduto.toFixed(2)}`)
} else if (codigoProduto == 5) {
    var valorProduto = precoProduto5 * quantiaProduto
    console.log(`Total: R$ ${valorProduto.toFixed(2)}`)
}