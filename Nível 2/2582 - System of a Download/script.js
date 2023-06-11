var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

listaDeMusicas = [
    {"musica": "PROXYCITY", "id": 0},
    {"musica": "P.Y.N.G.", "id": 1},
    {"musica": "DNSUEY!", "id": 2},
    {"musica": "SERVERS", "id": 3},
    {"musica": "HOST!", "id": 4},
    {"musica": "CRIPTONIZE", "id": 5},
    {"musica": "OFFLINE DAY", "id": 6},
    {"musica": "SALT", "id": 7},
    {"musica": "ANSWER!", "id": 8},
    {"musica": "RAR?", "id": 9},
    {"musica": "WIFI ANTENNAS", "id": 10},
]

var quantia = parseInt(lines.shift().trim())

for(let i = 1; i <= quantia; i++) {
    var valores = lines.shift().trim().split(" ")
    var x1 = parseInt(valores[0])
    var x2 = parseInt(valores[1])
    var calc = x1 + x2

    let nomeDaMusica;
    for (let i = 0; i < listaDeMusicas.length; i++) {
    if (listaDeMusicas[i].id === calc) {
        nomeDaMusica = listaDeMusicas[i].musica;
        console.log(`${nomeDaMusica}`)
        break;
    }
    }
}