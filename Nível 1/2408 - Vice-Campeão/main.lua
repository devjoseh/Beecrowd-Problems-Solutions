pontos = io.read()
x1, x2, x3 = pontos:match("(%S+)%s+(%S+)%s+(%S+)")
x1, x2, x3 = tonumber(x1), tonumber(x2), tonumber(x3)
numeros = {}
table.insert(numeros, x1)
table.insert(numeros, x2)
table.insert(numeros, x3)

local maior = numeros[1]

for i = 2, #numeros do
    if numeros[i] > maior then
        maior = numeros[i]
    end
end

for i = #numeros, 1, -1 do
    if numeros[i] == maior then
        table.remove(numeros, i)
    end
end

local maior = numeros[1]

for i = 2, #numeros do
    if numeros[i] > maior then
        maior = numeros[i]
    end
end

print(maior)