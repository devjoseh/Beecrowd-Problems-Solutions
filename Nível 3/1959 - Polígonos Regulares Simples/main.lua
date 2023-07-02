dados = io.read()
x1, x2 = dados:match("(%S+)%s+(%S+)")
x1, x2 = tonumber(x1), tonumber(x2)

print(x1*x2)