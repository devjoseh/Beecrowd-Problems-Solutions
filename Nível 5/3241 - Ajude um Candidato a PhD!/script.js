var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var quantia = parseInt(lines.shift())

for(let i = 1; i <= quantia; i++) {
    var texto = lines.shift().toString()

    if (texto != "P=NP") {
        var numeros = texto.split("+")
        var a = parseInt(numeros[0])
        var b = parseInt(numeros[1])
        if (isNaN(a) || isNaN(b)) {
            console.log("skipped")
        } else {
            var calc = a + b 
            console.log(calc)
        }
    }
}
