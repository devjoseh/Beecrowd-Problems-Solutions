while True:
    try:
        valor = int(input("A: "))
    
        calc = valor - 1
        
        print(calc)
    except EOFError:
        break