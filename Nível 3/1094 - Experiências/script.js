var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var quantia = parseInt(lines.shift().trim())

let cobaias = 0
let coelhos = 0
let ratos = 0
let sapos = 0

for (let i = 1; i <= quantia; i++) {
    var info = lines.shift().trim().split(" ")
    x1 = parseInt(info[0])
    x2 = info[1]

    if (x2 == "R") {
        ratos += x1
    } else if (x2 == "S") {
        sapos += x1
    } else if (x2 == "C") {
        coelhos += x1
    }

    cobaias += x1
}

let pCoelho = (coelhos / cobaias) * 100
let pRato = (ratos / cobaias) * 100
let pSapos = (sapos / cobaias) * 100

console.log(`Total: ${cobaias} cobaias`)
console.log(`Total de coelhos: ${coelhos}`)
console.log(`Total de ratos: ${ratos}`)
console.log(`Total de sapos: ${sapos}`)
console.log(`Percentual de coelhos: ${pCoelho.toFixed(2)} %`)
console.log(`Percentual de ratos: ${pRato.toFixed(2)} %`)
console.log(`Percentual de sapos: ${pSapos.toFixed(2)} %`)