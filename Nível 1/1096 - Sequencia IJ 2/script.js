var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var i = 1

for (let x = 1; x <= 5; x++) {
    var j = 7
    for (let y = 1; y <= 3; y++) {
        console.log(`I=${i} J=${j}`)
        j -= 1
    }
    i += 2
}