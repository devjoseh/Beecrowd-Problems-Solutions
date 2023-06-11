valor = io.read()

x1, x2 = valor:match("(%S+)%s+(%S+)")
x1, x2 = tonumber(x1), tonumber(x2)

if x1 > x2 then
    print(x1)
elseif x2 > x1 then
    print(x2)
elseif x1 == x2 then
    print(x1)
else
    print("Erro")
end