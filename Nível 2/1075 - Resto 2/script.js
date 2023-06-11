var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift())

let quantia = 10000

for (let i = 1; i <= quantia; i++) {
    var calc = i % valor

    if (calc == 2) {
        console.log(i)
    }
}