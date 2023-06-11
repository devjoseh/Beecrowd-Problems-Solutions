valor = io.read()
x1, x2 = valor:match("(%S+)%s+(%S+)")
print(x1)
print(x2)