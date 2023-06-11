valores = io.read()
abas, quantia = valores:match("(%S+)%s+(%S+)")
abas = tonumber(abas)
quantia = tonumber(quantia)

for i = 1, quantia do
    texto = io.read()
    texto = string.lower(texto)

    if texto == "fechou" then
        abas = abas - 1
        abas = abas + 2
    end

    if texto == "clicou" then
        abas = abas - 1
    end
end

print(abas)