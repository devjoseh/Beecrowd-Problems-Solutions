var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const coordX = 432
const coordY = 468

var [bolaX, bolaY] = lines.shift().split(" ").map(Number)
let fora = false

if (bolaX < 0 || bolaX > coordX) {
    fora = true
}

if (bolaY < 0 || bolaY > coordY) {
    fora = true
}

if (fora) {
    console.log("fora")
} else {
    console.log("dentro")
}