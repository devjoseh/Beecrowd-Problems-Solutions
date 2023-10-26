valor = tonumber(io.read())

for i = 0, 99 do 
    print(string.format("N[%d] = %.4f", i, valor))
    valor = valor / 2
end