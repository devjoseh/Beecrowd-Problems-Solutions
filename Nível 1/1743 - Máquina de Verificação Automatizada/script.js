var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let conector1 = lines.shift().split(" ").map(Number)
let conector2 = lines.shift().split(" ").map(Number)

let compativel = true 

for(let i = 0; i < 5; i++) {
    if(conector1[i] == conector2[i]) {
        compativel = false
        break
    }
}

if(compativel) {
    console.log("Y")
} else {
    console.log("N")
}