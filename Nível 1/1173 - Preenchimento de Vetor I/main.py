inicial = 0
valor = int(input("A: "))

for i in range(1, 10 + 1):

    print(f"N[{inicial}] = {valor}")

    valor *= 2
    inicial += 1