pares = 0

for i in range(5):
    valor = int(input("A: "))

    calculo = valor % 2

    if calculo == 0:
        pares += 1

print(f'{pares} valores pares')