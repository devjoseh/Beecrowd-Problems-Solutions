var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var quantia = parseInt(lines.shift())

for (let i = 1; i <= quantia; i++) {
    var valor = parseInt(lines.shift())

    console.log(valor)

    if (valor === 0) {
        console.log("NULL")
    } else if (valor % 2 == 0 && valor < 0) {
        console.log("EVEN NEGATIVE")
    } else if (valor % 2 == 1 && valor < 0) {
        console.log("ODD NEGATIVE")
    } else if (valor % 2 == 0 && valor > 0) {
        console.log("EVEN POSITIVE")
    } else if (valor % 2 == 1 && valor > 0) {
        console.log("ODD POSITIVE")
    }
}