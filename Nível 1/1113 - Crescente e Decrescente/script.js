var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    var valor = lines.shift().split(" ")
    x1 = parseInt(valor[0])
    x2 = parseInt(valor[1])

    if (x1 == x2) {
        break 
    } else {
        if (x1 > x2) {
            console.log("Decrescente")
        } else if (x2 > x1) {
            console.log("Crescente")
        }
    }
}