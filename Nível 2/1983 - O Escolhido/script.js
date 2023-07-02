var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var quantia = parseInt(lines.shift())

var matricula = 0
var maiorNota = 0

for (let i = 1; i <= quantia; i++) {
    var [mat, nota] = lines.shift().split(" ").map(Number)

    if (nota > maiorNota && nota >= 8) {
        matricula = mat 
        maiorNota = nota 
    }
}

if (maiorNota === 0) {
    console.log("Minimum note not reached")
} else {
    console.log(matricula.toFixed(0))
}