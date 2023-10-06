diametroBola = tonumber(io.read())
infos = io.read()
alturaC, larguraC, profundC = infos:match("(%S+)%s+(%S+)%s+(%S+)")
alturaC, larguraC, profundC = tonumber(alturaC), tonumber(larguraC), tonumber(profundC)
cabe = true 

if diametroBola > alturaC or diametroBola > larguraC or diametroBola > profundC then
    cabe = false  
end

if cabe == true then
    print("S")
else
    print("N")
end