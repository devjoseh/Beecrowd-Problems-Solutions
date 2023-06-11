inicial = 0

for i in range(1, 100 + 1):
    valor = float(input("A: "))

    if valor <= 10:
        arrendodado = round(valor, 1)
        print(f"A[{inicial}] = {arrendodado}")
    inicial += 1  

    