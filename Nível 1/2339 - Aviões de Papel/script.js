var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = lines.shift().split(" ")

var competidores = parseInt(valor[0])
var folhas = parseInt(valor[1])
var folhaPCompetidor = parseInt(valor[2])

var calc1 = folhas / folhaPCompetidor
var calc2 = calc1 / competidores

var calc3 = parseInt(calc2)

if (calc3 > 0) {
    console.log("S")
} else if (calc3 <= 0) {
    console.log("N")
} else {
    console.log("Erro")
}