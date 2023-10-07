var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var consumo = parseInt(lines.shift())

if(consumo <= 10) {
    console.log(7)
} else if (consumo <= 30 ) {
    let calc = (consumo - 10)
    calc = 7 + calc 
    console.log(calc)
} else if (consumo <= 100) {
    let calc = (consumo - 30)
    calc = 20 + 7 + (calc * 2)
    console.log(calc)
} else if (consumo >= 101) {
    let calc = (consumo - 100)
    calc = 140 + 20 + 7 + (calc * 5)
    console.log(calc)
}