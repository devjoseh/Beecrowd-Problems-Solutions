while True:
    quantia = int(input("A: "))

    if quantia == 0: break 

    valores = list(map(int, input("B: ").split(" ")))
    soma = sum(valores)
    calc = quantia - soma

    print(f"Mary won {calc} times and John won {soma} times")