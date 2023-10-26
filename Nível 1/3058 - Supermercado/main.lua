quantia = tonumber(io.read())

menor = 9999999999999

for i = 1, quantia do
    infos = io.read() 
    preco, gramas = infos:match("(%S+)%s+(%S+)")
    calc = (preco / gramas) * 1000

    if (calc < menor) then 
        menor = calc 
    end
end

print(string.format("%.2f", menor))