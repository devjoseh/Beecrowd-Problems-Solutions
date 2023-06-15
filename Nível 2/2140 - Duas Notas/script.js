var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    var dados = lines.shift().split(" ").map(Number)
    var compra = dados[0]
    var valorPago = dados[1]

    if (compra === 0 && valorPago === 0) {
        break
    } else {
        var valor = valorPago - compra

        var cedula100 = Math.floor(valor / 100);
        var valor = valor - cedula100 * 100
        
        var cedula50 = Math.floor(valor / 50);
        var valor = valor - cedula50 * 50
        
        var cedula20 = Math.floor(valor / 20);
        var valor = valor - cedula20 * 20
        
        var cedula10 = Math.floor(valor / 10);
        var valor = valor - cedula10 * 10
        
        var cedula5 = Math.floor(valor / 5);
        var valor = valor - cedula5 * 5
        
        var cedula2 = Math.floor(valor / 2);
        var valor = valor - cedula2 * 2
        
        var cedula1 = Math.floor(valor / 1);
        var valor = valor - cedula1 * 1

        var calc = cedula100 + cedula50 + cedula20 + cedula10 + cedula5 + cedula2

        if (calc === 2) {
            console.log("possible")
        } else {
            console.log("impossible")
        }
    }
}