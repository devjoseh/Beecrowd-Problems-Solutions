var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var quantia = parseInt(lines.shift())

var menor = 999999999999

for (let i = 1; i <= quantia; i++) {
    var [preco, gramas] = lines.shift().split(" ").map(Number)
    var calc = (preco / gramas) * 1000

    if (calc < menor) {
        menor = calc 
    }
}

console.log(`${menor.toFixed(2)}`)