var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var quantia = parseInt(lines.shift())

for (let i = 1; i <= quantia; i++) {
    var dados = lines.shift().split(" ").map(String)
    var hora = dados[0]
    var minuto = dados[1]
    var status = dados[2]

    if (hora == "0") {
        hora = "00"
    } else if (parseInt(hora) < 10) {
        hora = "0" + hora
    }

    if (minuto == "0") {
        minuto = "00"
    } else if (parseInt(minuto) < 10) {
        minuto = "0" + minuto
    }

    var status = parseInt(status)

    if (status == 1) {
        console.log(`${hora}:${minuto} - A porta abriu!`)
    } else if (status == 0) {
        console.log(`${hora}:${minuto} - A porta fechou!`)
    }
}