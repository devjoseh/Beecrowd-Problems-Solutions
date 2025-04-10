contador = {}
quantia = tonumber(io.read())

for i = 1, quantia do
    elemento = tonumber(io.read())
    if contador[elemento] then
        contador[elemento] = contador[elemento] + 1
    else
        contador[elemento] = 1
    end
end

ordenado = {}
for elemento in pairs(contador) do
    table.insert(ordenado, elemento)
end
table.sort(ordenado)

for _, chave in ipairs(ordenado) do
    print(string.format("%s aparece %d vez(es)", chave, contador[chave]))
end