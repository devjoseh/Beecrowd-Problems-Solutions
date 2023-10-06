var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var diamentroBola = parseInt(lines.shift())
var [alturaC, larguraC, profundC] = lines.shift().split(" ").map(Number)
var cabe = true

if(diamentroBola > alturaC || diamentroBola > larguraC || diamentroBola > profundC) {
    cabe = false
}

if(cabe) {
    console.log("S")
} else if (!cabe) {
    console.log("N")
}