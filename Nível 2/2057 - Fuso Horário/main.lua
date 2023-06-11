valor = io.read()
x1, x2, x3 = valor:match("(%S+)%s+(%S+)%s+(%S+)")

x1 = tonumber(x1)
x2 = tonumber(x2)
x3 = tonumber(x3)

calc = x1 + x2 + x3

if 0 <= calc and calc <= 23 then
    print(calc)
elseif calc > 24 then
    calc = calc - 24
    print(calc)
elseif calc < 0 then
    calc = math.abs(calc)
    calc = 24 - calc
    print(calc)
end