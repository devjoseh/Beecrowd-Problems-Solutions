var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numero = parseInt(lines.shift())

var compra = 0

for (var i = 1; i <= numero; i++) {
    var valores = lines.shift().split(" ")
    var x1 = parseInt(valores[0])
    var x2 = parseInt(valores[1])

    var val1001 = 1.50
    var val1002 = 2.50
    var val1003 = 3.50
    var val1004 = 4.50
    var val1005 = 5.50

    if (x1 == 1001) {
        var calculo = val1001 * x2
        var compra = compra + calculo
    } else if (x1 == 1002) {
        var calculo = val1002 * x2
        var compra = compra + calculo
    } else if (x1 == 1003) {
        var calculo = val1003 * x2
        var compra = compra + calculo
    } else if (x1 == 1004) {
        var calculo = val1004 * x2
        var compra = compra + calculo
    } else if (x1 == 1005) {
        var calculo = val1005 * x2
        var compra = compra + calculo
    }
}

console.log(`${compra.toFixed(2)}`)