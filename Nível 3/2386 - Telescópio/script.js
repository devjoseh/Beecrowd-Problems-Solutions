var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const abertura = parseInt(lines.shift())
const quantia = parseInt(lines.shift())
var vistas = 0

for (let i = 1; i <= quantia; i++) {
    var fotons = parseInt(lines.shift())
    var calc = abertura * fotons

    if (calc >= 40000000) {
        vistas++
    }
}

console.log(vistas)