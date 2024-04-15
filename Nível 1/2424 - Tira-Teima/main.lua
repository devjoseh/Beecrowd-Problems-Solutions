coordX = 432
coordY = 468

bolaX, bolaY = io.read():match("(%S+)%s+(%S+)")
bolaX, bolaY = tonumber(bolaX), tonumber(bolaY)
fora = false

if bolaX < 0 or bolaX > coordX then
    fora = true
end

if bolaY < 0 or bolaY > coordY then
    fora = true
end

if fora then 
    print("fora")
else
    print("dentro")
end