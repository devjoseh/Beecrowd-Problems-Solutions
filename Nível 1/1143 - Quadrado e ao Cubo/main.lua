numero = tonumber(io.read())
valor = 1

for i = 1, numero do 
    print(string.format("%d %d %d", valor, valor * valor, valor * valor * valor))
    valor = valor + 1
end