valores = input("A: ")

x1, x2, x3 = valores.split()

x1 = float(x1)
x2 = float(x2)
x3 = float(x3)

triangulo = (x1 * x3) / 2
circulo = 3.14159 * x3 ** 2
trapezio = ((x1 + x2) * x3) / 2
quadrado = x2 * x2
retangulo = x1 * x2

print("TRIANGULO: %.3f" % triangulo)
print("CIRCULO: %.3f" % circulo)
print("TRAPEZIO: %.3f" % trapezio)
print("QUADRADO: %.3f" % quadrado)
print("RETANGULO: %.3f" % retangulo)