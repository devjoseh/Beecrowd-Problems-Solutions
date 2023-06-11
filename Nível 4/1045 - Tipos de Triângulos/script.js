var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(" ")

var x1 = parseFloat(valores[0])
var x2 = parseFloat(valores[1])
var x3 = parseFloat(valores[2])

if (x1 < x2) {
    var formula = x1
    var x1 = x2
    var x2 = formula
}

if (x2 < x3) {
    var formula = x2
    var x2 = x3
    var x3 = formula
}

if (x1 < x2) {
    var formula = x1
    var x1 = x2
    var x2 = formula
}

if (x1 >= x2+x3) {
    return console.log("NAO FORMA TRIANGULO")
} 

if (x1**2 == x2**2 + x3**2) {
    console.log("TRIANGULO RETANGULO")
} 

if (x1**2 > x2**2 + x3**2) {
    console.log("TRIANGULO OBTUSANGULO")
} 

if (x1**2 < x2**2 + x3**2) {
    console.log("TRIANGULO ACUTANGULO") 
} 

if (x1 == x2 && x2 == x3) {
    console.log('TRIANGULO EQUILATERO')
} 

if (x1 == x2 && x2 != x3 || x1 == x3 && x3 != x2 || x2 == x3 && x3 != x1) {
    console.log('TRIANGULO ISOSCELES')
}