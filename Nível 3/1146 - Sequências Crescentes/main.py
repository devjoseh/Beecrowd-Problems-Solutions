while True:
    valor = int(input("A: "))

    if valor == 0:
        break
    else:
        for i in range(1, valor):
            print(i, end=" ")
        print(valor)