var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var vI = 1
var vJ = 60

while (true) {
    if (vJ < 0) {
        break 
    } else {
        console.log(`I=${vI} J=${vJ}`)
        vI += 3
        vJ -= 5
    }
}