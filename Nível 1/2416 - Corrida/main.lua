valor = io.read()
x1, x2 = valor:match("(%S+)%s+(%S+)")
x1 = tonumber(x1)
x2 = tonumber(x2)

formula = ((x1 % x2) + x2) % x2 

print(formula)