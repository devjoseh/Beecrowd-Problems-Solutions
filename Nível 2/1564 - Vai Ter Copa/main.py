
while True:
    try:
        valor = int(input("A: "))
        
        if valor == 0:
            print("vai ter copa!")
        else:
            print("vai ter duas!")

    except EOFError:
        break