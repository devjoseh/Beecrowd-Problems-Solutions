var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    try {
        const jogadores = parseInt(lines.shift())
        var votos = lines.shift().split(" ").map(Number)
        let soma = 0;

        for (let i = 0; i < votos.length; i++) {
            soma += votos[i];
        }

        if (soma/jogadores >= (2/3)) {
            console.log("impeachment")
        } else {
            console.log("acusacao arquivada")
        }

    } catch (error) {
        break
    }
}