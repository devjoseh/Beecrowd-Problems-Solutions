var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var quantia = parseInt(lines.shift())

for (let i = 1; i <= quantia; i++) {
    var valor = lines.shift().split(" ")
    var x1 = parseFloat(valor[0])
    var x2 = parseFloat(valor[1])

    if (x2 === 0) {
        console.log("divisao impossivel")
    } else {
        var calc = x1 / x2 
        console.log(`${calc.toFixed(1)}`)
    }
}