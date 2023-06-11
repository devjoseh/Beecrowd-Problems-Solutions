var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numeroFunc = parseInt(lines.shift());
var horasTrab = parseInt(lines.shift());
var valorHora = parseFloat(lines.shift());

var salario = horasTrab * valorHora

console.log(`NUMBER = ${numeroFunc}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)