var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

quantia = parseInt(lines.shift())

for(let i = 1; i <= quantia; i++) {
    var valores = lines.shift()
    .split(" ")
    .map(Number)
    .filter(num => num !== 0);

    var tomada = valores[0] - 1
    valores.shift();
    let soma = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    var calc = soma - tomada 
    console.log(calc)
}