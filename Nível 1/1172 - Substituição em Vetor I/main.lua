inicial = 0

for i = 1, 10 do
    valor = tonumber(io.read())
    
    if valor <= 0 then 
        valor = 1
    end
    print(string.format("X[%d] = %d", inicial, math.floor(valor)))
    inicial = inicial + 1
end