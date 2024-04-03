var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let quantia = parseInt(lines.shift().trim())

for(let i = 1; i <= quantia; i++) {
    let valor = parseInt(lines.shift().trim())

    if(valor > 8000) {
        console.log("Mais de 8000!")
    } else {
        console.log("Inseto!")
    }
}