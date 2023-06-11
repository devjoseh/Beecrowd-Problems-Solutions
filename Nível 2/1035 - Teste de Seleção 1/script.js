var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = lines.shift().split(" ")

var numeroA = parseInt(valor[0])
var numeroB = parseInt(valor[1])
var numeroC = parseInt(valor[2])
var numeroD = parseInt(valor[3])

if (numeroB > numeroC && numeroD > numeroA && (numeroC + numeroD) > (numeroA + numeroB) && numeroC > 0 && numeroD > 0 && numeroA % 2 == 0) {
    console.log("Valores aceitos")
} else {
    console.log("Valores nao aceitos")
}