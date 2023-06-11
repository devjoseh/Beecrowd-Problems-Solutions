positivos = 0
nmrsPosi = []
media = 0

for i in range(6):
    valor = float(input("A: "))

    if valor >= 0:
        positivos += 1
        nmrsPosi.append(valor)

for valor in nmrsPosi:
    media += valor

print(f'{positivos} valores positivos')
print(f'{media/positivos:.1f}')