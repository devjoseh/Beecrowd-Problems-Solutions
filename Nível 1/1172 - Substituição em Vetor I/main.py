inicial = 0

for i in range(1, 10 + 1):
    valor = float(input("A: "))
    if valor <= 0:
        valor = 1
    print(f"X[{inicial}] = {int(valor)}")
    inicial += 1