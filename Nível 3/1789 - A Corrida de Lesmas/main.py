while True:
    try:
        quantia = int(input("A: "))
        lesma = list(map(int, input("B: ").split(" ")))
        maior = max(lesma)

        if maior < 10:
            print("1")
        elif 10 <= maior < 20:
            print("2")
        elif maior >= 20:
            print("3") 
    except EOFError:
        break