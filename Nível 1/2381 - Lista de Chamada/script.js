var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [alunos, vencedor] = lines.shift().split(" ").map(Number)
let nomes = []

for (let i = 1; i <= alunos; i++) {
    let nomeAluno = lines.shift().trim()
    nomes.push(nomeAluno)
}

nomes.sort()

let alunoPremiado = vencedor - 1
console.log(nomes[alunoPremiado])