valor = io.read()

c1, c2, c3, c4 = valor:match("(%S+)%s+(%S+)%s+(%S+)%s+(%S+)")

c1,c2,c3,c4 = tonumber(c1), tonumber(c2), tonumber(c3), tonumber(c4)

if c1 == 1 and c2 == 0 and c3 == 0 and c4 == 0 then
    print("1")
elseif c1 == 0 and c2 == 1 and c3 == 0 and c4 == 0 then
    print("2")
elseif c1 == 0 and c2 == 0 and c3 == 1 and c4 == 0 then
    print("3")
elseif c1 == 0 and c2 == 0 and c3 == 0 and c4 == 1 then
    print("4")
else
    print("Erro")
end