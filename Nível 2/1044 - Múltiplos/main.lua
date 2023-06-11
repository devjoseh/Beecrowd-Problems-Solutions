numeros = io.read()

x1,x2 = numeros:match("(%S+)%s+(%S+)")
x1,x2 = tonumber(x1), tonumber(x2)

calc = x2 / x1

if math.floor(calc) ~= calc then 
    print("Nao sao Multiplos")
else
    print("Sao Multiplos")
end