quantia = int(input("A: "))

for i in range(1, quantia + 1):
    texto = input("B: ")

    if texto == "P=NP":
        print("skipped")
    else:
        texto = texto.split("+")
        a = int(texto[0])
        b = int(texto[1])
        calc = a + b 
        print(calc)