var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let maxRepresentacao = parseInt(lines.shift())
var [n1, operador, n2] = lines.shift().split(" ").map(String)
n1 = parseInt(n1)
n2 = parseInt(n2)
var calc = 0

if (operador == "*") {
    calc = n1 * n2 
} else {
    calc = n1 + n2
}

if (calc > maxRepresentacao) {
    console.log("OVERFLOW")
} else {
    console.log("OK")
}