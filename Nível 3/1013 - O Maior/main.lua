valor = io.read()
x1,x2,x3 = valor:match("(%S+)%s+(%S+)%s+(%S+)")
x1,x2,x3 = tonumber(x1),tonumber(x2),tonumber(x3)

formula = (x1 + x2 + math.abs(x1 - x2)) / 2
resultado = (formula + x3 + math.abs(formula - x3)) / 2

print(string.format("%d eh o maior", resultado))