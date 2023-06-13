var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const quantia = parseInt(lines.shift())

for (let i = 1; i <= quantia; i++) {
    var dados = lines.shift().split(" ").map(String)

    if (dados[1] == "+") {
        var calc = parseInt(dados[0]) + parseInt(dados[2])
    } else if (dados[1] == "-") {
        var calc = parseInt(dados[0]) - parseInt(dados[2])
    } else if (dados[1] == "x") {
        var calc = parseInt(dados[0]) * parseInt(dados[2])
    }

    if (parseInt(dados[4]) < calc) {
        var x1 = calc 
        var x2 = parseInt(dados[4])
    } else if (parseInt(dados[4]) >= calc) {
        var x1 = parseInt(dados[4])
        var x2 = calc
    }

    var calc2 = x1 - x2 

    var texto = "r"
    var errou = texto.repeat(calc2)

    console.log(`E${errou}ou!`)
}