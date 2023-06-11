var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const quantia = parseInt(lines.shift())

let saque = 0;
let saqueS = 0;
let block = 0;
let blockS = 0;
let atck = 0;
let atckS = 0;

for (let i = 1; i <= quantia; i++) {
    var nome = lines.shift()
    const [x1, x2, x3] = lines.shift().split(" ").map(Number);
    const [y1, y2, y3] = lines.shift().split(" ").map(Number);

    saque += x1 
    saqueS += y1

    block += x2
    blockS += y2 

    atck += x3 
    atckS += y3
}

let pontoS = 100 * (saqueS / saque)
let pontoB = 100 * (blockS / block)
let pontoA = 100 * (atckS / atck)

console.log(`Pontos de Saque: ${pontoS.toFixed(2)} %.`)
console.log(`Pontos de Bloqueio: ${pontoB.toFixed(2)} %.`)
console.log(`Pontos de Ataque: ${pontoA.toFixed(2)} %.`)