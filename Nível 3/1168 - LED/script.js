var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let lista = {
    1: 2,
    2: 5,
    3: 5,
    4: 4,
    5: 5,
    6: 6,
    7: 3,
    8: 7,
    9: 6,
    0: 6,
};

let quantidade = parseInt(lines.shift());

for (let i = 1; i <= quantidade; i++) {
    let ledsTotal = 0;

    let valor = Number(lines.shift());

    for (var digito of valor.toString()) {
        ledsTotal += lista[digito];
    }

    console.log(`${ledsTotal} leds`);
}
