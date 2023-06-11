while True:
    try:
        jogadores = int(input("A: "))
        votos = list(map(int, input("B: ").split(" ")))
        soma = sum(votos)

        if soma / jogadores >= (2/3):
            print("impeachment")
        else:
            print("acusacao arquivada")
    except EOFError:
        break