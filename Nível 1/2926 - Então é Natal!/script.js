var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let quantia = parseInt(lines.shift())

function enviarNatal(multiplicador) {
    let string = "a"
    let calc = string.repeat(multiplicador)
    console.log(`Ent${calc}o eh N${calc}t${calc}l!`)
}

enviarNatal(quantia)