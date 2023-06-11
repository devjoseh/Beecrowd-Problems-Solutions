var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    try {
        var valor = parseInt(lines.shift())

        if (valor >= 0 && valor < 90 || valor == 360) {
            console.log("Bom Dia!!")
        } else if (valor >= 90 && valor < 180) {
            console.log("Boa Tarde!!")
        } else if (valor >= 180 && valor < 270) {
            console.log("Boa Noite!!")
        } else if (valor >= 270 && valor < 360) {
            console.log("De Madrugada!!")   
        }
    } catch (error) {
        break;
    }
}