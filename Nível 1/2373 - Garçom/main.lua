entregas = tonumber(io.read())
coposQuebrados = 0

for i = 1, entregas do 
    latas, copos = io.read():match("(%S+)%s+(%S+)")
    latas, copos = tonumber(latas), tonumber(copos)

    if latas > copos then 
        coposQuebrados = coposQuebrados + copos
    end
end

print(coposQuebrados)