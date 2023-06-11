var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift())

for (let i = 1; i <= valor; i++) {
    var ano = parseInt(lines.shift())
    var calc = ano - 2015

    if (calc < 0) {
        console.log(`${-calc} D.C.`)
    } else if (calc == 0) {
        console.log(`1 A.C.`)
    } else {
        console.log(`${calc+1} A.C.`)
    }
}