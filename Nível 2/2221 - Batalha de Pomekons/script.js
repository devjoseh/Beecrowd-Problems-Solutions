var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var quantia = parseInt(lines.shift())

for(let i = 1; i <= quantia; i++) {
    var bonus = parseInt(lines.shift())

    var info1 = lines.shift().split(" ")
    var info2 = lines.shift().split(" ")

    ataque1 = parseInt(info1[0])
    defesa1 = parseInt(info1[1])
    level1 = parseInt(info1[2])

    ataque2 = parseInt(info2[0])
    defesa2 = parseInt(info2[1])
    level2 = parseInt(info2[2])

    if (level1 % 2 == 0) {
        var calc1 = ((ataque1 + defesa1) / 2) + bonus
    } else {
        var calc1 = ((ataque1 + defesa1) / 2)
    }

    if (level2 % 2 == 0) {
        var calc2 = ((ataque2 + defesa2) / 2) + bonus
    } else {
        var calc2 = ((ataque2 + defesa2) / 2)
    }

    if (calc1 > calc2) {
        console.log("Dabriel")
    } else if (calc2 > calc1) {
        console.log("Guarte")
    } else {
        console.log("Empate")
    }
}