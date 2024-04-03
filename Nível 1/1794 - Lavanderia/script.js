var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let pecas = parseInt(lines.shift())

var [l1, l2] = lines.shift().split(" ").map(Number)
var [s1, s2] = lines.shift().split(" ").map(Number)

let lavar = (pecas >= l1) && (pecas <= l2)
let secar = (pecas >= s1) && (pecas <= s2)

if(lavar && secar) {
    console.log("possivel")
} else {
    console.log("impossivel")
}