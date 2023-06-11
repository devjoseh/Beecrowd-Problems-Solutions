var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines.shift())

if (salario <= 400.00) {
    var salarioPercentual = salario * 0.15
    var salarioNovo = salario + salarioPercentual
    console.log(`Novo salario: ${salarioNovo.toFixed(2)}`)
    console.log(`Reajuste ganho: ${salarioPercentual.toFixed(2)}`)
    console.log("Em percentual: 15 %")
} else if (salario <= 800.00 ) {
    var salarioPercentual = salario * 0.12
    var salarioNovo = salario + salarioPercentual
    console.log(`Novo salario: ${salarioNovo.toFixed(2)}`)
    console.log(`Reajuste ganho: ${salarioPercentual.toFixed(2)}`)
    console.log("Em percentual: 12 %")
} else if (salario <= 1200.00) {
    var salarioPercentual = salario * 0.10
    var salarioNovo = salario + salarioPercentual
    console.log(`Novo salario: ${salarioNovo.toFixed(2)}`)
    console.log(`Reajuste ganho: ${salarioPercentual.toFixed(2)}`)
    console.log("Em percentual: 10 %")
} else if (salario <= 2000.00) {
    var salarioPercentual = salario * 0.07
    var salarioNovo = salario + salarioPercentual
    console.log(`Novo salario: ${salarioNovo.toFixed(2)}`)
    console.log(`Reajuste ganho: ${salarioPercentual.toFixed(2)}`)
    console.log("Em percentual: 7 %")
} else {
    var salarioPercentual = salario * 0.04
    var salarioNovo = salario + salarioPercentual
    console.log(`Novo salario: ${salarioNovo.toFixed(2)}`)
    console.log(`Reajuste ganho: ${salarioPercentual.toFixed(2)}`)
    console.log("Em percentual: 4 %")
}