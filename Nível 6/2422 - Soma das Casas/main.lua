function encontrar_soma(lista, alvo)
    local numeros = {}

    for i, num in ipairs(lista) do
        local complemento = alvo - num

        if numeros[complemento] then
            return {num, complemento}
        else
            numeros[num] = i
        end
    end
    return nil
end

quantia = tonumber(io.read())
numeros = {}

for i = 1, quantia do 
    num = tonumber(io.read())
    table.insert(numeros, num)
end

alvo = tonumber(io.read())

resultado = encontrar_soma(numeros, alvo)

print(string.format("%d %d", resultado[2], resultado[1]))