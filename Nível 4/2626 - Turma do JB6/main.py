while True:
    try:
        jogadas = list(map(str, input("A: ").split(" ")))

        dodo   = "Os atributos dos monstros vao ser inteligencia, sabedoria..."
        leo    = "Iron Maiden's gonna get you, no matter how far!"
        pepper = "Urano perdeu algo muito precioso..."
        empate = "Putz vei, o Leo ta demorando muito pra jogar..."

        if jogadas == ["pedra", "tesoura", "tesoura"]:
            print(dodo)
        elif jogadas == ["papel", "pedra", "pedra"]:
            print(dodo)
        elif jogadas == ["tesoura", "papel", "papel"]:
            print(dodo)
        elif jogadas == ["tesoura", "pedra", "tesoura"]:
            print(leo)
        elif jogadas == ["pedra", "papel", "pedra"]:
            print(leo)
        elif jogadas == ["papel", "tesoura", "papel"]:
            print(leo)
        elif jogadas == ["tesoura", "tesoura", "pedra"]:
            print(pepper)
        elif jogadas == ["pedra", "pedra", "papel"]:
            print(pepper)
        elif jogadas == ["papel", "papel", "tesoura"]:
            print(pepper)
        else:
            print(empate)
    except EOFError:
        break