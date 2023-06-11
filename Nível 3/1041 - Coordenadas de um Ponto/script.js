var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var informacao = lines.shift().split(" ")
x = parseFloat(informacao[0])
y = parseFloat(informacao[1])

if (x == 0) {
    if (y == 0) {
        console.log("Origem")
    }

    if (y != 0) {
        console.log("Eixo Y")
    }
}

if (y == 0) {
    if (x != 0) {
        console.log("Eixo X")
    }
}

if (x > 0) {
    if (y > 0) {
        console.log("Q1")
    } 

    if (y < 0) {
        console.log("Q4")
    }
}

if (x < 0) {
    if (y > 0) {
        console.log("Q2")
    }

    if (y < 0) {
        console.log("Q3")
    }
}