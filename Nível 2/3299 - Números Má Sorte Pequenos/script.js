var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift());
var numeromal = 13;

if (valor.toString().includes(numeromal)) {
    console.log(`${valor} es de Mala Suerte`);
} else {
    console.log(`${valor} NO es de Mala Suerte`);
}

