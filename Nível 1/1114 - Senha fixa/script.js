var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var senha = 0

while (senha != 2002) {
    var senha = parseInt(lines.shift())

    if (senha == 2002) {
        console.log("Acesso Permitido")
    } else {
        console.log("Senha Invalida")
    }
}