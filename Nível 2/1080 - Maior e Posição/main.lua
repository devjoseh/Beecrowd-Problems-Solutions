listaNumeros = {}

for i = 1, 100 do
    valor = tonumber(io.read())
    table.insert(listaNumeros, valor)
end

maximo = math.max(table.unpack(listaNumeros))

function findIndex(tabela, valor)
    for i, v in ipairs(tabela) do
        if v == valor then
            return i
        end
    end
    return nil
end

indice = findIndex(listaNumeros, maximo)

print(maximo)
print(indice)