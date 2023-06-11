var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var informacao1 = lines.shift().trim()
var informacao2 = lines.shift().trim()
var informacao3 = lines.shift().trim()

if (informacao1 == "vertebrado") {

    if (informacao2 == "ave") {

        if (informacao3 == "carnivoro") {
            console.log("aguia")

        } else if (informacao3 == "onivoro") {
            console.log("pomba")

        } else {
            console.log("erro")
        }
    } else if (informacao2 == "mamifero") {

        if (informacao3 == "onivoro") {
            console.log("homem")

        } else if (informacao3 == "herbivoro") {
            console.log("vaca")

        } else {
            console.log("erro")
        }
    }
}

if (informacao1 == "invertebrado") {

    if (informacao2 == "inseto") {

        if (informacao3 == "hematofago") {
            console.log("pulga")

        } else if (informacao3 == "herbivoro") {
            console.log("largata")

        } else {
            console.log("erro")
        }
    } else if (informacao2 == "anelideo") {

        if (informacao3 == "hematofago") {
            console.log("sanguessuga") 

        } else if (informacao3 == "onivoro") {
            console.log("minhoca")

        } else {
            console.log("erro")
        }
    }
}