while True:
    valor = input("A: ")
    x1,x2 = valor.split(" ")
    x1 = int(x1)
    x2 = int(x2)

    if x1 == 0 and x2 == 0:
        break
    else: 
        calc = x2 * x1
        print(calc)