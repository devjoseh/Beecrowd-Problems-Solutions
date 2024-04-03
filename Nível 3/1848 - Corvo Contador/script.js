var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let gritos = 0
let soma = 0

while(gritos < 3) {
    let texto = lines.shift().trim()

    if(texto == "caw caw") {
        console.log(soma)
        soma = 0
        gritos++
    } else {
        valores = texto.split("")

        if(valores[0] == "*") soma += 4
        if (valores[1] == "*") soma += 2
        if (valores[2] == "*") soma += 1
    }
}