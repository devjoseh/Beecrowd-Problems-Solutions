valores = io.read()

nmA, nmB, nmC, nmD = valores:match("(%S+)%s+(%S+)%s+(%S+)%s+(%S+)")

numeroA = tonumber(nmA)
numeroB = tonumber(nmB)
numeroC = tonumber(nmC)
numeroD = tonumber(nmD)

if numeroB > numeroC and numeroD > numeroA and (numeroC + numeroD) > (numeroA + numeroB) and numeroC > 0 and numeroD > 0 and numeroA % 2 == 0 then
    print("Valores aceitos")
else
    print("Valores nao aceitos")
end