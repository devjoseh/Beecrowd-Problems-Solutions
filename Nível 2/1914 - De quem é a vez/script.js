var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var quantia = parseInt(lines.shift().trim())

for (let i = 1; i <= quantia; i++) {
    var texto = lines.shift().trim().split(" ")
    var jogada = lines.shift().trim().split(" ")

    var player1 = texto[0]
    var escolha1 = texto[1]
    var player2 = texto[2]
    var escolha2 = texto[3]

    var x1 = parseInt(jogada[0]) 
    var x2 = parseInt(jogada[1])
    
    var jogador1 = escolha1
    var jogador2 = escolha2

    var venceu = 0

    var calculo = (x1 + x2) % 2

    if (calculo === 0) {
        var venceu = 1
    } else if (calculo == 1) {
        var venceu = 2
    }

    if (venceu == 1 && jogador1 == "PAR") {
        console.log(player1)
    } else if (venceu == 1 && jogador2 == "PAR") {
        console.log(player2)
    } else if (venceu == 2 && jogador1 == "IMPAR") {
        console.log(player1)
    } else if (venceu == 2 && jogador2 == "IMPAR") {
        console.log(player2)
    }
}