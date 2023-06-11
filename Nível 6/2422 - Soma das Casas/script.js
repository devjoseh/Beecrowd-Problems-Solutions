var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

function encontrarSoma(lista, alvo) {
    numeros = {}

    for (var i = 0; i < lista.length; i++) {
        var num = lista[i];
        var complemento = alvo - num;
    
        if (complemento in numeros) {
          return [num, complemento];
        } else {
          numeros[num] = i;
        }
    }
    return null
}

var quantia = parseInt(lines.shift())
var numeros = []

for(let i = 1; i <= quantia; i++) {
    var num = parseInt(lines.shift())
    numeros.push(num)
}

var alvo = parseInt(lines.shift())

resultado = encontrarSoma(numeros, alvo)
console.log(`${resultado[1]} ${resultado[0]}`)