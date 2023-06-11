valor = tonumber(io.read())

isIn = 0
isOut = 0

for i = 1, valor do 
    numero = tonumber(io.read())

    if numero >= 10 and numero <= 20 then
        isIn = isIn + 1
    else
        isOut = isOut + 1
    end
end

print(string.format("%d in", isIn))
print(string.format("%d out", isOut))