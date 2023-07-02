while True:
    try:
        visitantes, alturaMi, alturaMax = map(int, input("A: ").split(" "))
        permitidos = 0

        for i in range(1, visitantes + 1):
            altura = int(input("B: "))

            if altura >= alturaMi and altura <= alturaMax:
                permitidos += 1

        print(permitidos)
    except EOFError:
        break