valor = int(input("A:"))

if valor % 2 == 0:
    valor += 1

for i in range(6):
    print(valor)
    valor += 2
