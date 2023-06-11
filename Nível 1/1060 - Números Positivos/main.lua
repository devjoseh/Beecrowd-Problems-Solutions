quantia = 6
positivos = 0

for i = 1, quantia do
    valor = tonumber(io.read())

    if valor >= 0 then 
        positivos = positivos + 1
    end
end

print(string.format("%d valores positivos", positivos))