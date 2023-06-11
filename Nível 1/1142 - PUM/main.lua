numero = tonumber(io.read())
valor = 1

for i = 1, numero do 
    print(string.format("%d %d %d PUM", valor, valor + 1, valor + 2))
    valor = valor + 4
end