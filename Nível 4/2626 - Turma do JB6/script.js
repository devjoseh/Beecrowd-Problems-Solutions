var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    try {
        var jogadas = lines.shift().split(" ").map(String)

        jogadas[2] = jogadas[2].replace("\r", "")

        const dodo   = "Os atributos dos monstros vao ser inteligencia, sabedoria..."
        const leo    = "Iron Maiden's gonna get you, no matter how far!"
        const pepper = "Urano perdeu algo muito precioso..."
        const empate = "Putz vei, o Leo ta demorando muito pra jogar..."

        if (jogadas.toString() === ["pedra", "tesoura", "tesoura"].toString()) {
            console.log(dodo)
        } else if (jogadas.toString() === ['papel', 'pedra', 'pedra'].toString()) {
            console.log(dodo)
        } else if (jogadas.toString() === ["tesoura", "papel", "papel"].toString()) {
            console.log(dodo)
        } else if (jogadas.toString() == ["tesoura", "pedra", "tesoura"].toString()) {
            console.log(leo)
        } else if (jogadas.toString() == ["pedra", "papel", "pedra"].toString()) {
            console.log(leo)
        } else if (jogadas.toString() == ["papel", "tesoura", "papel"].toString()) {
            console.log(leo)
        } else if (jogadas.toString() == ["tesoura", "tesoura", "pedra"].toString()) {
            console.log(pepper)
        } else if (jogadas.toString() == ["pedra", "pedra", "papel"].toString()) {
            console.log(pepper)
        } else if (jogadas.toString() == ["papel", "papel", "tesoura"].toString()) {
            console.log(pepper)
        } else {
            console.log(empate)
        }
    } catch (error) {
        break
    }
}