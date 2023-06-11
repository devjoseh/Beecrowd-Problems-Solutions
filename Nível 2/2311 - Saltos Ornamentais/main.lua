quantia = tonumber(io.read())

for i = 1, quantia do
    nomeAtleta = io.read()
    dificuldade = tonumber(io.read())
    notas = {}
    for num in string.gmatch(io.read(), "%S+") do
        table.insert(notas, tonumber(num))
    end

    max_value = math.max(table.unpack(notas))
    for j, num in ipairs(notas) do
        if num == max_value then
            table.remove(notas, j)
            break
        end
    end

    min_value = math.min(table.unpack(notas))
    for j, num in ipairs(notas) do
        if num == min_value then
            table.remove(notas, j)
            break
        end
    end

    soma = 0
    for j, num in ipairs(notas) do
        soma = soma + num
    end

    notaFinal = soma * dificuldade
    print(string.format("%s %.2f", nomeAtleta, notaFinal))
end