var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift())

for (let i = 1; i <= valor; i++) {
    var texto = lines.shift().split(" ")

    var x1 = texto[0]
    var x2 = parseInt([1])

    var x1 = x1.toLowerCase()

    if (x1 == "thor") {
        console.log("Y")
    } else {
        console.log("N")
    }
}