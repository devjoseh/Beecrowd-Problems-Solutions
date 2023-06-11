valor = tonumber(io.read())

if valor % 2 == 0 then 
    valor = valor + 1 
end

for i = 1, 6 do 
    print(valor)
    valor = valor + 2
end