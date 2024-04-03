var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let entregas = parseInt(lines.shift())
let coposQuebrados = 0

for(let i = 1; i <= entregas; i++) {
    var [latas, copos] = lines.shift().split(" ").map(Number)
    if (latas > copos) coposQuebrados += copos
}

console.log(coposQuebrados)