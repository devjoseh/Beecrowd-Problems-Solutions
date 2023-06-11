while True:
    quantia = int(input("A: "))

    if quantia == 0: break

    jgdr1 = 0
    jgdr2 = 0

    for i in range(1, quantia + 1):
        x1, x2 = map(int, input("B: ").split(" "))

        if x1 > x2:
            jgdr1 += 1
        elif x2 > x1:
            jgdr2 += 1
    print(jgdr1, jgdr2)