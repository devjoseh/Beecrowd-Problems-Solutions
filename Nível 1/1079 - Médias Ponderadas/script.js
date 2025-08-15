var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let quantidade = parseInt(lines.shift())

for (let i = 1; i <= quantidade; i++) {
    let [a, b, c] = lines.shift().split(" ").map(Number)
    let media = (a*2 + b*3 + c*5) / 10
    console.log(media.toFixed(1))
}