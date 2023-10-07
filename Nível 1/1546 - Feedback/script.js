var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var quantia = parseInt(lines.shift())

for(var i = 1; i <= quantia; i++) {
    var feedbacks = parseInt(lines.shift())
    for(var j = 1; j <= feedbacks; j++) {
        var categoria = parseInt(lines.shift())

        if(categoria === 1) {
            console.log("Rolien")
        } else if (categoria === 2) {
            console.log("Naej")
        } else if (categoria === 3) {
            console.log("Elehcim")
        } else if (categoria === 4) {
            console.log("Odranoel")   
        }
    }
}