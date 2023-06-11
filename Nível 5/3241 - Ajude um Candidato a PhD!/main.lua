quantia = tonumber(io.read())

for i = 1, quantia do 
    texto = io.read()

    if texto == "P=NP" then 
        print("skipped")
    else
        a, b = texto:match("(%S+)%+(%S+)")
        a, b = tonumber(a), tonumber(b)
        calc = a + b 
        print(calc)
    end
end