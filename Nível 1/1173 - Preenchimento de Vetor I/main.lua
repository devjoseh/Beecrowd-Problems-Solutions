inicial = 0
valor = tonumber(io.read())

for i = 1, 10 do 
    print(string.format("N[%d] = %d", inicial, valor))

    valor = valor * 2 
    inicial = inicial + 1
end