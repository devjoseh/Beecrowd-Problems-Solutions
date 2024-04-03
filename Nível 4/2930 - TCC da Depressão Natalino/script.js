var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let dados = lines.shift().split(" ").map(Number)
let entregue = dados[0]
let dataFinal = dados[1]

let calc = dataFinal - entregue

if(calc >= 3) {
    console.log("Muito bem! Apresenta antes do Natal!")
} else if (calc < 0) {
    console.log("Eu odeio a professora!")
} else {
    dataFinal += 2

    console.log("Parece o trabalho do meu filho!")

    if(dataFinal <= 24) {
        console.log("TCC Apresentado!")
    } else {
        console.log("Fail! Entao eh nataaaaal!")
    }
}