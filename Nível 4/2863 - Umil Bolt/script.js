var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    try {
        let quantia = parseInt(lines.shift().trim())
        var menorTempo = 99999

        for(let i = 1; i <= quantia; i++) {
            let tempo = parseFloat(lines.shift().trim())

            if(tempo < menorTempo) {
                menorTempo = tempo
            }
        }

        console.log(menorTempo)
    } catch (error) {
        break;
    }
}