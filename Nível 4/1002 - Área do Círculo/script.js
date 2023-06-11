var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var area = parseFloat(lines.shift())

var numero = 3.14159

var areaCirculo = area * numero * area

console.log(`A=${areaCirculo.toFixed(4)}`)

{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}