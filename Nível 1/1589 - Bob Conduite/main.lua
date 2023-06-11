numero = tonumber(io.read())

for i = 1, numero do
    valores = io.read()
    x1, x2 = valores:match("(%S+)%s+(%S+)")
    x1 = tonumber(x1)
    x2 = tonumber(x2)
    calc = x2 + x1
    print(calc)
end