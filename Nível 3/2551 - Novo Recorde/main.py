while True:
    try:
        treinos = int(input("A: "))

        recorde = 0

        for i in range(1, treinos + 1):
            duracao, distancia = map(int, input("B: ").split(" "))

            calc = distancia / duracao

            if calc > recorde:
                recorde = calc
                print(i)
            else:
                continue
    except EOFError:
        break