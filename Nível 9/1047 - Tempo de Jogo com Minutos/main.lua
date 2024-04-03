valores = io.read()
h1, m1, h2, m2 = valores:match("(%S+)%s+(%S+)%s+(%S+)%s+(%S+)")

h1 = tonumber(h1)
h2 = tonumber(h2)
m1 = tonumber(m1)
m2 = tonumber(m2)

minutosInicio = (h1 * 60) + m1
minutosFim = (h2 * 60) + m2

if (minutosFim <= minutosInicio) then
    minutosFim = minutosFim + 24 * 60
end

minutosTotais = minutosFim - minutosInicio

horasTotais = math.floor(minutosTotais / 60)
minutosTotais = minutosTotais - (horasTotais * 60)

print(string.format("O JOGO DUROU %d HORA(S) E %d MINUTO(S)", horasTotais, minutosTotais))