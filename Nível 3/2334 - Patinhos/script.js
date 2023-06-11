var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    var valor = parseInt(lines.shift())

    if (valor < 0) {
        break 
    } else {
        if (valor == 0) {
            console.log("0")
        } else {
            console.log(valor-1)
        }
    }
}