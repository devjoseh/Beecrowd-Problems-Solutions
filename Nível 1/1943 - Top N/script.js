var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift())

if (valor == 1) {
    console.log("Top 1")
} else if (valor <= 3) {
    console.log("Top 3")
} else if (valor <= 5) {
    console.log("Top 5")
} else if (valor <= 10) {
    console.log("Top 10")
} else if (valor <= 25) {
    console.log("Top 25")
} else if (valor <= 50) {
    console.log("Top 50")
} else if (valor <= 100) {
    console.log("Top 100")
} else {
    console.log("Erro")
}