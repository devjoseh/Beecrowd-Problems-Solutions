var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var infos = lines.shift().split(" ")

var vc = parseInt(infos[0])
var ec = parseInt(infos[1])
var gc = parseInt(infos[2])

var vf = parseInt(infos[3])
var ef = parseInt(infos[4])
var gf = parseInt(infos[5])

var pontosCor = (vc * 3) + (ec * 1)
var pontosFla = (vf * 3) + (ef * 1)

if (pontosCor > pontosFla) {
    console.log("C")
} else if (pontosFla > pontosCor) {
    console.log("F")
} else if (pontosFla == pontosCor) {
    if (gc > gf) {
        console.log("C")
    } else if (gf > gc) {
        console.log("F")
    } else if (gc == gf) {
        console.log("=")
    } else {
        console.log("Erro")
    }
}