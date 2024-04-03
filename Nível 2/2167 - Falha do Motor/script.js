var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let quantia = parseInt(lines.shift())
let valores = lines.shift().split(" ").map(Number)
let queda = 0
let medida = 1
let achado = false 

for(let i = 0; i < valores.length; i++) {
    if(valores[i] < queda) {
        console.log(medida)
        achado = true
        break
    } else {
        queda = valores[i]
        medida++
    }
}

if(achado == false) console.log(0)