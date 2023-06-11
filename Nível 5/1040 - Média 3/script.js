var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numero = lines.shift()

var valores = numero.split(" ");

var x1 = parseFloat(valores[0]) * 2
var x2 = parseFloat(valores[1]) * 3
var x3 = parseFloat(valores[2]) * 4
var x4 = parseFloat(valores[3]) * 1

var mediaFinal = (x1 + x2 + x3 + x4) / 10

console.log(`Media: ${mediaFinal.toFixed(1)}`)

if (mediaFinal >= 7) {
    console.log("Aluno aprovado.")
} else if (mediaFinal < 5) {
    console.log("Aluno reprovado.")
} else if (5 <= mediaFinal <= 6.9) {
    console.log("Aluno em exame.")
    var notaExame = parseFloat(lines.shift())
    console.log(`Nota do exame: ${notaExame.toFixed(1)}`)
    var mediaNova = (notaExame + mediaFinal) / 2

    if (mediaNova >= 5) {
        console.log("Aluno aprovado.")
        console.log(`Media final: ${mediaNova.toFixed(1)}`)
    } else {
        console.log("Aluno reprovado.")
        console.log(`Media final: ${mediaNova.toFixed(1)}`)
    }
} 
