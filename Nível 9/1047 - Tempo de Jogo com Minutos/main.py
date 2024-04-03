h1, m1, h2, m2 = map(int, input().split())

minutosInicio = (h1 * 60) + m1
minutosFim = (h2 * 60) + m2

if minutosFim <= minutosInicio:
    minutosFim += 24 * 60

minutosTotais = minutosFim - minutosInicio

horasTotais = int(minutosTotais / 60)
minutosTotais = minutosTotais - (horasTotais * 60)

print(f"O JOGO DUROU {horasTotais} HORA(S) E {minutosTotais} MINUTO(S)")