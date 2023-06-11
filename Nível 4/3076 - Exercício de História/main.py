while True:
    try:
        ano = int(input("A: "))
        seculo = ano // 100

        if ano % 100 != 0: seculo += 1
        print(seculo)
    except EOFError:
        break