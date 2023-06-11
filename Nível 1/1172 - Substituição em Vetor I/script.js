var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var inicial = 0 

for (let i = 1; i <= 10; i++) {
    var valor = parseFloat(lines.shift())

    if (valor <= 0) {
        var valor = 1
    }

    console.log(`X[${inicial}] = ${parseInt(valor)}`)
    inicial += 1
}