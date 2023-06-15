renas = {'Dasher', 'Dancer', 'Prancer', 'Vixen', 'Comet', 'Cupid', 'Donner', 'Blitzen', 'Rudolph'}

dados = io.read()
x1, x2, x3, x4, x5, x6, x7, x8, x9 = dados:match("(%S+)%s+(%S+)%s+(%S+)%s+(%S+)%s+(%S+)%s+(%S+)%s+(%S+)%s+(%S+)%s+(%S+)")

x1, x2, x3, x4, x5, x6, x7, x8, x9 = tonumber(x1), tonumber(x2), tonumber(x3), tonumber(x4), tonumber(x5), tonumber(x6), tonumber(x7), tonumber(x8), tonumber(x9)

soma = x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 + x9 

i = 0

for j = 1, soma do
    if i == 8 then
        i = 0
    else
        i = i + 1
    end
end

if i == 0 then
    print(renas[9])
else
    print(renas[i - 1])
end