var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var texto1 = lines.shift()
var texto2 = lines.shift()

var quantia = texto1.length
var quantia2 = texto2.length

if (quantia < quantia2) {
    console.log("no")
} else {
    console.log("go")
}