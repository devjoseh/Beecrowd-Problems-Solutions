quantidade = tonumber(io.read())

for i = 1, quantidade do
    notas = io.read()
    a, b, c = notas:match("(%S+)%s+(%S+)%s+(%S+)")
    a, b, c = tonumber(a), tonumber(b), tonumber(c)
    media = (a*2 + b*3 + c*5) / 10
    print(string.format("%.1f", media))
end