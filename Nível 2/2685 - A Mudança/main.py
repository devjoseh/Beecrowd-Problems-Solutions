while True:
    try:
        valor = int(input("A: "))

        if valor >= 0 and valor < 90 or valor == 360:
            print("Bom Dia!!")
        elif valor >= 90 and valor < 180:
            print("Boa Tarde!!")
        elif valor >= 180 and valor < 270:
            print("Boa Noite!!")
        elif valor >= 270 and valor < 360:
            print("De Madrugada!!")
    except EOFError:
        break