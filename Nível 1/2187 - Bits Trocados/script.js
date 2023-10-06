var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var teste = 1

while (true) {
    var valor = parseInt(lines.shift())

    if(valor === 0) { break }

    var cedula50 = Math.floor(valor / 50);
    var valor = valor - cedula50 * 50

    var cedula10 = Math.floor(valor / 10);
    var valor = valor - cedula10 * 10

    var cedula5 = Math.floor(valor / 5);
    var valor = valor - cedula5 * 5

    var cedula1 = Math.floor(valor / 1);
    var valor = valor - cedula1 * 1

    console.log(`Teste ${teste}`)
    console.log(`${cedula50} ${cedula10} ${cedula5} ${cedula1}`)
    console.log("")
    teste++
}