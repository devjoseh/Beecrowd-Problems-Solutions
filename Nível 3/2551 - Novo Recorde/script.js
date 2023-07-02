var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while(lines.length != 0){
    var treinos = parseInt(lines.shift())

    var recorde = 0

    for (let i = 1; i <= treinos; i++) {
        var [duracao, distancia] = lines.shift().split(" ").map(Number)

        var calc = distancia / duracao

        if (calc > recorde) {
            recorde = calc 
            console.log(i)
        } else {
            continue
        }
    }
}