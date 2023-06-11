valor = input("A: ")

x1, x2, x3 = valor.split()

x1 = float(x1)
x2 = float(x2)
x3 = float(x3)

if x1 == 0.0 or (x2 ** 2 - 4 * x1 * x3) < 0:
    print("Impossivel calcular")
else:
    valor1 = (- x2 + (x2 ** 2 - 4 * x1 * x3) ** (1/2)) / (2 * x1)
    valor2 = (- x2 - (x2 ** 2 - 4 * x1 * x3) ** (1/2)) / (2 * x1)
    print("R1 = %.5f" % valor1)
    print("R2 = %.5f" % valor2)