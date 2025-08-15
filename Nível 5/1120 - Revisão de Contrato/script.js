var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    let [digito, valorNegociado] = lines.shift().split(" ").map(Number)
    if(digito === 0 && valorNegociado === 0) {
        break;
    }

    let removedNumber = valorNegociado.toString().replace(new RegExp(digito, "g"), "")
    console.log(removedNumber)
}