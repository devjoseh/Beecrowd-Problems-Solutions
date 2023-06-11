var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var quantia = parseInt(lines.shift())

for(let i = 1; i <= quantia; i++) {
    var texto = lines.shift()

    console.log("I am Toorg!")
}