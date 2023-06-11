var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var distancia = parseInt(lines.shift());
var combustivelGasto = parseFloat(lines.shift());

var resultado = distancia / combustivelGasto

console.log(`${resultado.toFixed(3)} km/l`)