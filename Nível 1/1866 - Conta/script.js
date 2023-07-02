var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var quantia = parseInt(lines.shift())

for (let i = 1; i <= quantia; i++) {
    var num = parseInt(lines.shift())

    if (num % 2 === 0) {
        console.log(0)
    } else {
        console.log(1)
    }
}