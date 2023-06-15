var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    try {
        var quantia = parseInt(lines.shift())
        var lesmas = lines.shift().split(" ").map(Number)
        var maior = Math.max(...lesmas);

        if (maior < 10) {
            console.log('1')
        } else if (maior >= 10 && maior < 20) {
            console.log("2")
        } else if (maior >= 20) {
            console.log('3')
        }
    } catch (error) {
        break
    }
}