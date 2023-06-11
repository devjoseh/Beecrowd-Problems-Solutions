bolinhas = int(input("A "))
galhos = int(input("B "))

calculo = galhos // 2

if calculo <= bolinhas or bolinhas >= galhos:
    print("Amelia tem todas bolinhas!")
else:
    print(f"Faltam {calculo - bolinhas} bolinha(s)")