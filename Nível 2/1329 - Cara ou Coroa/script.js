var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    const quantia = parseInt(lines.shift())

    if (quantia === 0) { break }

    var valores = lines.shift().split(" ").map(Number)
    let soma = 0;

    for (let i = 0; i < valores.length; i++) {
        soma += valores[i];
    }

    let calc = quantia - soma 

    console.log(`Mary won ${calc} times and John won ${soma} times`)
}