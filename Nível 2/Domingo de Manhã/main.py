while True:
    try:
        valor = input("A: ")
        x1,x2 = valor.split(":")

        x1 = int(x1)
        x2 = int(x2)

        if x2 == 00:
            print("Atraso maximo: 0")
        else:
            print(f"Atraso maximo: {x2}")
    except EOFError:
        break