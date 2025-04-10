var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let contador = [];
let quantia = Number(lines.shift());

for (let i = 1; i <= quantia; i++) {
    let elemento = lines.shift().trim()
    let item = contador.find((item) => item.e === elemento)

    if (item) {
        item.q += 1
    } else {
        contador.push({ e: elemento, q: 1 })
    }
}

let sorted = contador.sort((a, b) => a.e - b.e)

for (let item of sorted) {
    console.log(`${item.e} aparece ${item.q} vez(es)`)
}