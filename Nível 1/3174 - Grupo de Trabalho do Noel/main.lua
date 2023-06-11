--string.lower(texto)

quantia = tonumber(io.read())

bonecos = 0
arquitetos = 0
musicos = 0
desenhistas = 0
total = 0

for i = 1, quantia do
    texto = io.read()
    nome, grupo, horas = texto:match("(%S+)%s+(%S+)%s+(%S+)")
    grupo = string.lower(grupo)
    horas = tonumber(horas)

    if grupo == "bonecos" then
        bonecos = bonecos + horas
    elseif grupo == "arquitetos" then
        arquitetos = arquitetos + horas
    elseif grupo == "musicos" then
        musicos = musicos + horas
    elseif grupo == "desenhistas" then
        desenhistas = desenhistas + horas
    end
end

total = total + math.floor(bonecos / 8)
total = total + math.floor(arquitetos / 4)
total = total + math.floor(musicos / 6)
total = total + math.floor(desenhistas / 12)

print(total)