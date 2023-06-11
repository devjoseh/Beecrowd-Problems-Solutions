var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var mes = parseInt(lines.shift())

if (mes == 1) {
    console.log("January")
} else if (mes == 2) {
    console.log("February")
} else if (mes == 3) {
    console.log("March")
} else if (mes == 4) {
    console.log("April")
} else if (mes == 5) {
    console.log("May")
} else if (mes == 6) {
    console.log("June")
} else if (mes == 7) {
    console.log("July")
} else if (mes == 8) {
    console.log("August")
} else if (mes == 9) {
    console.log("September")
} else if (mes == 10) {
    console.log("October")
} else if (mes == 11) {
    console.log("November")
} else if (mes == 12) {
    console.log("December")
} else {
    console.log("Error")
}