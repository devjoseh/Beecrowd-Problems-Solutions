dados = io.read()
x1, x2, x3, x4 = dados:match("(%S+)%s+(%S+)%s+(%S+)%s+(%S+)")

calc = ((x1 + x2 + x3) - 3) + x4 

print(calc)