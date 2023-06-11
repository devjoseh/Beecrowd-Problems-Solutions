var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    try {
        var valor = parseInt(lines.shift())

        if (valor === 0) {
            console.log(`vai ter copa!`)
        } else {
            console.log(`vai ter duas!`)
        }
    } catch (error) {
        break
    }
}