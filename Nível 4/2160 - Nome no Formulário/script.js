var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var texto = lines.shift()

if (texto.length <= 80) {
    console.log("YES")
} else {
    console.log("NO")
}