var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var texto = lines.shift()

var quantia = texto.length

if (quantia <= 140) {
    console.log("TWEET")
} else {
    console.log("MUTE")
}