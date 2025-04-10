quantia = int(input())
contador = {}

for i in range(1, quantia + 1):
    elemento = int(input())
    if elemento in contador:
        contador[elemento] += 1
    else:
        contador[elemento] = 1

for elemento in sorted(contador):
    print(f"{elemento} aparece {contador[elemento]} vez(es)")