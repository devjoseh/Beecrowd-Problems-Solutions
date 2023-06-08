info = input("A: ").split(" ")
x1,x2 = int(info[0]), int(info[1])
demorado = 0

for i in range(1, x2 + 1):
    quantia = input("B: ").split(" ")
    y1, y2 = int(quantia[0]), int(quantia[1])

    if y1 > (demorado + 1) * 20:
        demorado += 1

print(demorado)

