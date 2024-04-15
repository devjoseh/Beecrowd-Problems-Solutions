var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let quantiaCriancas = parseInt(lines.shift())

let bomComportamento = 0
let malComportamento = 0
let listaNomes = []

for (let i = 1; i <= quantiaCriancas; i++) {
    var [comportamento, nomeCrianca] = lines.shift().split(" ").map(String)

    if (comportamento == "+") {
        bomComportamento++
    } else {
        malComportamento++
    }

    listaNomes.push(nomeCrianca)
}

listaNomes.sort()

for(let i = 0; i < listaNomes.length; i++) {
    console.log(listaNomes[i])
}

console.log(`Se comportaram: ${bomComportamento} | Nao se comportaram: ${malComportamento}`)