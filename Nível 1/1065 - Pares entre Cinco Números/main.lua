pares = 0

for i = 1, 5 do 
    valor = tonumber(io.read())
    calc = valor % 2

    if calc == 0 then
        pares = pares + 1
    end
end

print(string.format("%d valores pares", pares))