quantia = tonumber(io.read())

cobaias = 0
coelhos = 0
ratos = 0
sapos = 0

for i = 1, quantia do
    info = io.read()
    x1, x2 = info:match("(%S+)%s+(%S+)")
    x1 = tonumber(x1)

    if x2 == "R" then
        ratos = ratos + x1
    elseif x2 == "S" then 
        sapos = sapos + x1
    elseif x2 == "C" then 
        coelhos = coelhos + x1
    end

    cobaias = cobaias + x1
end

pCoelho = (coelhos / cobaias) * 100
pRato = (ratos / cobaias) * 100
pSapos = (sapos / cobaias) * 100

print(string.format("Total: %d cobaias", cobaias))
print(string.format("Total de coelhos: %d", coelhos))
print(string.format("Total de ratos: %d", ratos))
print(string.format("Total de sapos: %d", sapos))
print("Percentual de coelhos: " .. string.format("%.2f", pCoelho) .. " %")
print("Percentual de ratos: " .. string.format("%.2f", pRato) .. " %")
print("Percentual de sapos: " .. string.format("%.2f", pSapos) .. " %")