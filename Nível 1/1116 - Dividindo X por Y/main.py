quantia = int(input("A: "))

for i in range(1, quantia + 1):
    valor = input("B: ")

    x1,x2 = valor.split(" ")

    x1 = float(x1)
    x2 = float(x2)

    if (x2 == 0):
        print("divisao impossivel")
    else:
        calc = x1 / x2 
        print(calc)