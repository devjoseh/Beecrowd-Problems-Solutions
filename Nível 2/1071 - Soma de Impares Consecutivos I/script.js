var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift())
var b = parseInt(lines.shift())
var soma = 0

if (a > b) {
    if (b < 0) {
        b += 1
    }

    for(let i = 1; i <= a,b; i++) {
        if (i % 2 != 0) {
            soma += i
        }
    }
} else {
    if (a < 0) {
        a += 1
    }

    for(let i = 1; i <= a,b; i++) {
        if (i % 2 != 0) {
            soma += i
        }
    }
}

console.log(soma)