valoresLidos = 0
media = 0

while valoresLidos ~= 2 do 
    valor = tonumber(io.read())

    if valor < 0.0 or valor > 10.0 then
        print("nota invalida")
    else
        valoresLidos = valoresLidos + 1
        media = media + valor
    end
end

calc = media / 2
print(string.format("media = %.2f", calc))