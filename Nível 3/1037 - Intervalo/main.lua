io.write("A: ")
valor = tonumber(io.read())

if valor >= 0 and valor <= 25 then
    print("Intervalo [0,25]")
elseif valor > 25 and valor <= 50 then
    print("Intervalo (25,50]")
elseif valor > 50 and valor <= 75 then
    print("Intervalo (50,75]")
elseif valor > 75 and valor <= 100 then
    print("Intervalo (75,100]")
elseif valor > 100 or valor < 0 then
    print("Fora de intervalo")
end