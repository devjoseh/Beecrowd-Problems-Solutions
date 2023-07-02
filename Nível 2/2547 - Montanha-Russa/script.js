var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    try {
        var [visitantes, alturaMi, alturaMax] = lines.shift().split(" ").map(Number)
        var permitidos = 0

        for (let i = 1; i <= visitantes; i++) {
            var altura = parseInt(lines.shift())

            if (altura >= alturaMi && altura <= alturaMax) {
                permitidos++
            }
        }

        console.log(permitidos)
    } catch (eror) {
        break
    }
}