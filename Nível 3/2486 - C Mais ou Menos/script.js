var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const lista_itens = [
    ["suco", 120],
    ["morango", 85],
    ["mamao", 85],
    ["goiaba", 70],
    ["manga", 56],
    ["laranja", 50],
    ["brocolis", 34]
];

while (true) {
    const quantia = parseInt(lines.shift().trim())
    var mg = 0

    if (quantia === 0) {
        break;
    }

    for (let i = 1; i <= quantia; i++) {
        var infos = lines.shift().trim().split(" ")
        var x1 = parseInt(infos[0])
        var x2 = infos[1]

        for (let j = 0; j < lista_itens.length; j++) {
            const item = lista_itens[j];
            if (x2.toLowerCase() === item[0].toLowerCase()) {
                mg += x1 * item[1];
            }
        }
    }

    if (mg >= 110 && mg <= 130) {
        console.log(`${mg} mg`)
    }

    if (mg > 130) {
        console.log(`Menos ${mg - 130} mg`)
    }

    if (mg < 110) {
        console.log(`Mais ${110 - mg} mg`)
    }
}