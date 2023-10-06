teste = 1

while(True):
    participantes = int(input("A: "))

    if(participantes == 0): break

    entradas = list(map(int, input("B: ").split()))
    pos = 1
    ganhador = 0
    for pessoa in entradas:
        if(pessoa == pos):
            ganhador = pessoa
        pos += 1
    
    print(f"Teste {teste}")
    print(ganhador)
    print("")
    teste += 1