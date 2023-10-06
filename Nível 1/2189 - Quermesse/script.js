var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var teste = 1

while (true) {
    var participantes = parseInt(lines.shift())
    if(participantes === 0) { break }

    var entradas = lines.shift().split(" ").map(Number)
    var pos = 1
    var ganhador = 0

    for(let pessoa of entradas){
        if(pessoa === pos) {
            ganhador = pessoa 
        }
        pos++
    }

    console.log(`Teste ${teste}`)
    console.log(ganhador)
    console.log("")
    teste++
}