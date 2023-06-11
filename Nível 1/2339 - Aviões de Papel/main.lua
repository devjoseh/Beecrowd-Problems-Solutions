valor = io.read()
competidores,folhas,folhaPCompetidor = valor:match("(%S+)%s+(%S+)%s+(%S+)")

competidores = tonumber(competidores)
folhas = tonumber(folhas)
folhaPCompetidor = tonumber(folhaPCompetidor)

calc1 = folhas / folhaPCompetidor
calc2 = calc1 / competidores

calc3 = math.floor(calc2)

if calc3 > 0 then
    print("S")
elseif calc3 <= 0 then
    print("N")
else 
    print("erro")
end