quantidade = 0
idades = 0

while true do
    valor = tonumber(io.read())

    if valor < 0 then 
        break 
    else
        quantidade = quantidade + 1
        idades = idades + valor
    end
end

calculo = idades / quantidade

print(string.format("%.2f", calculo))