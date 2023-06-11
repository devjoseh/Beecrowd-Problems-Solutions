while True:
    valor = int(input("A: "))
    
    if valor < 0:
        break 
    else: 
        
        if valor == 0:
            print("0")
        else:
            calc = valor - 1
            print(calc)