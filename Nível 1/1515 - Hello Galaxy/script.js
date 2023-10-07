var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while(true) {
    var quantia = parseInt(lines.shift())
    if(quantia === 0) { break }

    var menor = 999999999999
    var civilizacao = "nenhum"

    for(let i = 1; i <= quantia; i++) {
        var [nome, ano, tempo] = lines.shift().split(" ").map(String)
        ano = parseInt(ano)
        tempo = parseInt(tempo)

        var calc = ano - tempo 

        if(calc < menor) {
            menor = calc 
            civilizacao = nome 
        }
    }

    console.log(civilizacao)
}