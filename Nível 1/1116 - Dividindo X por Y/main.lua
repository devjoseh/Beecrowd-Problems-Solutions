quantia = tonumber(io.read())

for i = 1, quantia do 
    valor = io.read()
    x1, x2 = valor:match("(%S+)%s+(%S+)")
    x1, x2 = tonumber(x1), tonumber(x2)

    if x2 == 0 then
        print("divisao impossivel")
    else
        calc = x1 / x2 
        print(calc)
    end
end