var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(" ")
var abas = parseInt(valores[0])
var quantia = parseInt(valores[1])

for(let i = 1; i <= quantia; i++) {
    var texto = lines.shift().toLowerCase()

    if (texto == "fechou") {
        abas -= 1
        abas += 2
    }

    if (texto == "clicou") {
        abas -= 1
    }
    
}

console.log(abas)