valores = io.read()
x1, x2 = valores:match("(%S+)%s+(%S+)")
x1 = tonumber(x1)
x2 = tonumber(x2)

if x1 < x2 then 
    tempo = x2 - x1 
else
    tempo = (24 - x1) + x2 
end

print(string.format("O JOGO DUROU %d HORA(S)", tempo))