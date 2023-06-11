var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var quantia = parseInt(lines.shift())

for (let i = 1; i <= quantia; i++) {
    let dgt2 = i ** 2
    let dgt3 = i ** 3

    console.log(`${i} ${dgt2} ${dgt3}`)
    console.log(`${i} ${dgt2+1} ${dgt3+1}`)
}