par = 0
impar = 0
positivo = 0
negativo = 0

for i = 1, 5 do
    valor = tonumber(io.read())

    if valor > 0 then
        positivo = positivo + 1
    end

    if valor < 0 then 
        negativo = negativo + 1
    end

    calc = valor % 2

    if calc == 0 then
        par = par + 1
    end

    if calc ~= 0 then
        impar = impar + 1
    end
end

print(string.format("%d valor(es) par(es)", par))
print(string.format("%d valor(es) impar(es)", impar))
print(string.format("%d valor(es) positivo(s)", positivo))
print(string.format("%d valor(es) negativo(s)", negativo))