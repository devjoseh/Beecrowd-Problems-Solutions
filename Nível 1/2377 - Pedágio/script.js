var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var infos1 = lines.shift().split(" ")
var infos2 = lines.shift().split(" ")

const comprimento = parseInt(infos1[0])
const pedagio = parseInt(infos1[1])

const custoKm = parseInt(infos2[0])
const custoPedagio = parseInt(infos2[1])

var calc = Math.floor(comprimento / pedagio)
var calc = calc * custoPedagio + (comprimento * custoKm)

console.log(calc)