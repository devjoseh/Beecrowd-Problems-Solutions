var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const lista1 = lines.shift().split(" ").map(Number)
const lista2 = lines.shift().split(" ").map(Number)

const valoresRepetidos = new Set(lista1.filter(x => lista2.includes(x)))

if (valoresRepetidos.size < 3) {
    console.log("azar")
} else if (valoresRepetidos.size === 3) {
    console.log("terno")
} else if (valoresRepetidos.size === 4) {
    console.log("quadra")
} else if (valoresRepetidos.size === 5) {
    console.log("quina")
} else if (valoresRepetidos.size === 6) {
    console.log("sena")
}