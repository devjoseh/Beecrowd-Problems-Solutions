var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    var [x1, x2] = lines.shift().split(" ").map(Number)

    if (x1 == 0 && x2 == 0) { break }

    var soma = x1 + x2 

    console.log(soma)
}