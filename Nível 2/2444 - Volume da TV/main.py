volumeInicial, trocas = map(int, input("A: ").split(" "))
mudancas = list(map(int, input("B: ").split(" ")))

for valor in mudancas:
    volumeInicial += int(valor)

    if volumeInicial > 100:
        volumeInicial = 100
    elif volumeInicial < 0:
        volumeInicial = 0

print(volumeInicial)