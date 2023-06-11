valor = tonumber(io.read())
potencia = 2

for i = 2, valor, 2 do
    print(string.format("%d^2 = %d", i, i ^ 2))
end