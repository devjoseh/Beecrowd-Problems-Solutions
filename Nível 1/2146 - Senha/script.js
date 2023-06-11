var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    try {
        var valor = parseInt(lines.shift())

        console.log(valor-1)
    } catch (error) {
        break;
    }
}