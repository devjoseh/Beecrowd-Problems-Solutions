var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift()
var numeros = valores.split(" ")

var x1 = parseFloat(numeros[0])
var x2 = parseFloat(numeros[1])
var x3 = parseFloat(numeros[2])

var triangulo = (x1 * x3) / 2
var circulo = 3.14159 * x3 ** 2
var trapezio = ((x1 + x2) *x3) / 2
var quadrado = x2 * x2
var retangulo = x1 * x2

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`)
console.log(`CIRCULO: ${circulo.toFixed(3)}`)
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`)
console.log(`QUADRADO: ${quadrado.toFixed(3)}`)
console.log(`RETANGULO: ${retangulo.toFixed(3)}`)