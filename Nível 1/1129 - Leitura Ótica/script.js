var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var letrasRespostas = ["A", "B", "C", "D", "E"]

while (true) {
    let quantiaQuestoes = parseInt(lines.shift())

    if (quantiaQuestoes == 0) break 

    for(let i = 1; i <= quantiaQuestoes; i++) {
        let respostas = lines.shift().split(" ").map(Number)
        let pretos = 0
        let brancos = 0
        let resposta = false

        for(let j = 0; j < 5; j++) {
            if(respostas[j] <= 127) {
                pretos++
                resposta = j
            } else {
                brancos++
            }
        }

        if (pretos > 1 || pretos == 0) {
            console.log("*")
        } else {
            console.log(letrasRespostas[resposta])
        }
    }
}