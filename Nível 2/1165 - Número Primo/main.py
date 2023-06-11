def essaPorraEPrimo(valor):
    if valor < 2:
        return False
    for i in range(2, int(valor**0.5) + 1):
        if valor % i == 0:
            return False
    return True

quantidade = int(input("A: "))

for i in range(1, quantidade + 1):
    valor = int(input("B: "))

    if essaPorraEPrimo(valor) == True:
        print(f"{valor} eh primo")  
    else:
        print(f"{valor} nao eh primo")  