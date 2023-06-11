valor = input("A: ")

competidores,folhas,folhaPCompetidor = valor.split(" ")

competidores = int(competidores)
folhas = int(folhas)
folhaPCompetidor = int(folhaPCompetidor)

calc1 = folhas / folhaPCompetidor
calc2 = calc1 / competidores

calc3 = int(calc2)

if calc3 > 0:
    print("S")
elif calc3 <= 0:
    print("N")
else:
    print("erro")