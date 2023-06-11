valores = io.read()
x1, x2, x3 = valores:match("(%S+)%s+(%S+)%s+(%S+)")
x1 = tonumber(x1)
x2 = tonumber(x2)
x3 = tonumber(x3)

triangulo = (x1 * x3) / 2
circulo = 3.14159 * x3 ^ 2
trapezio = ((x1 + x2) * x3) / 2
quadrado = x2 * x2 
retangulo = x1 * x2

print(string.format("TRIANGULO: %.3f", triangulo))
print(string.format("CIRCULO: %.3f", circulo))
print(string.format("TRAPEZIO: %.3f", trapezio))
print(string.format("QUADRADO: %.3f", quadrado))
print(string.format("RETANGULO: %.3f", retangulo))