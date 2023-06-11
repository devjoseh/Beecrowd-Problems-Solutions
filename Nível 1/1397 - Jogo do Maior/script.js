var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    const quantia = parseInt(lines.shift())

    if (quantia === 0) { break }

    var jgdr1 = 0
    var jgdr2 = 0

    for (let i = 1; i <= quantia; i++) {
        var [x1, x2] = lines.shift().split(" ").map(Number)

        if (x1 > x2) {
            jgdr1 += 1
        } else if (x2 > x1) {
            jgdr2 += 1
        }
    }

    console.log(jgdr1, jgdr2)
}