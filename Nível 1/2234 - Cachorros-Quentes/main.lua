valor = io.read()
x1, x2 = valor:match("(%S+)%s+(%S+)")
x1 = tonumber(x1)
x2 = tonumber(x2)

calc = x1 / x2
print(string.format("%.2f", calc))