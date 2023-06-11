informacao1 = input("A: ")
informacao2 = input("A: ")

x1, y1 = informacao1.split()
x2, y2 = informacao2.split()

x1 = float(x1)
y1 = float(y1)

x2 = float(x2)
y2 = float(y2)

calculo1 = (x2 - x1) ** 2
calculo2 = (y2 - y1) ** 2
calculo3 = calculo1 + calculo2
raiz = calculo3 ** (1/2)

print("%.4f" % raiz)