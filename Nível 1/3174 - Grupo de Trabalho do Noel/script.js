var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var quantia = parseInt(lines.shift())

var bonecos = 0
var arquitetos = 0
var musicos = 0
var desenhistas = 0
var total = 0

for (let i = 1; i <= quantia; i++) {
    var texto = lines.shift().split(" ")
    var grupo = texto[1].toLowerCase()
    var horas = parseInt(texto[2])

    if (grupo == "bonecos") {
        bonecos += horas 
    } else if (grupo == "arquitetos") {
        arquitetos += horas 
    } else if (grupo == "musicos") {
        musicos += horas
    } else if (grupo == "desenhistas") {
        desenhistas += horas
    }
}

total += Math.floor(bonecos / 8)
total += Math.floor(arquitetos / 4)
total += Math.floor(musicos / 6)
total += Math.floor(desenhistas / 12)

console.log(total)