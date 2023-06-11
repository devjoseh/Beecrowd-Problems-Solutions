var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const distancia = parseInt(lines.shift())

if (distancia <= 800) {
    console.log("1")
} else if (distancia > 800 && distancia <= 1400) {
    console.log("2")
} else if (distancia > 1400 && distancia <= 2000) {
    console.log("3")
}