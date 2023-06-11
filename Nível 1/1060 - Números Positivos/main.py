quantia = 6
positivos = 0

for i in range(1, quantia + 1):
    valor = float(input("A: "))

    if valor >= 0:
        positivos += 1

print(f"{positivos} valores positivos")