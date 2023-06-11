local numeros = {}
for num in io.read():gmatch("%d+") do
    table.insert(numeros, tonumber(num))
end

local maior = math.max(table.unpack(numeros))
print(maior)