var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var bolinhas = parseInt(lines.shift())
var galhos = parseInt(lines.shift())

var calc1 = galhos / 2
var calc2 = calc1 - bolinhas

if (calc2 <= 0) {
    console.log("Amelia tem todas bolinhas!")
} else {
    console.log(`Faltam ${Math.floor(calc2)} bolinha(s)`)
}