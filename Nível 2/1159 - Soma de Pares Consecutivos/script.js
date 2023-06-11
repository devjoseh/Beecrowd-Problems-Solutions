var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    var valor = parseInt(lines.shift())

    if (valor == 0) {
        break 
    } else {
        let calculo = valor % 2 

        if (calculo != 0) {
            valor += 1
        }

        let formula = (valor) + (valor + 2) + (valor + 4) + (valor + 6) + (valor + 8)

        console.log(formula)
    }
}