var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    var valor = lines.shift().split(" ")
    x1 = parseInt(valor[0])
    x2 = parseInt(valor[1])

    if (x1 == 0 && x2 == 0) {
        break 
    } else {
        var calc = x2 * x1 
        console.log(calc)
    }
}