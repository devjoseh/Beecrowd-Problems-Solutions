quantia = int(input("A: "))

vencedores = []

for i in range(1, quantia + 1):
    nomeAtleta = input("B: ")
    dificuldade = float(input("C: "))
    notas = list(map(float, input("D: ").split(" ")))
    notas.remove(max(notas))
    notas.remove(min(notas))
    soma = sum(notas)
    notaFinal = soma * dificuldade
    vencedores.append(f"{nomeAtleta} {notaFinal:.2f}")

for valor in vencedores:
    print(valor)