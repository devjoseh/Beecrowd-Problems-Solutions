var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const minutos = parseInt(lines.shift())
const [x1, x2] = lines.shift().split(" ").map(Number)

calc = x1 + x2 

if (calc > minutos) {
    console.log("Deixa para amanha!")
} else {
    console.log("Farei hoje!")
}