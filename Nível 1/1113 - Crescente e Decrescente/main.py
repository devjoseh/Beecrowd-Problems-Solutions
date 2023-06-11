while True:
    valor = input("A: ")
    x1,x2 = valor.split(" ")
    x1 = int(x1)
    x2 = int(x2)

    if x1 == x2:
        break 
    else: 
        if x1 > x2:
            print("Decrescente")
        elif x2 > x1:
            print("Crescente")