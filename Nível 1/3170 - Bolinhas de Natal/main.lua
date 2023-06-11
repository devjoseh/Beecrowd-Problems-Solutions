bolinhas = tonumber(io.read())
galhos = tonumber(io.read())
calculo = math.floor(galhos / 2)

if calculo <= bolinhas or bolinhas >= galhos then 
    print("Amelia tem todas bolinhas!")
else 
    print(string.format("Faltam %d bolinha(s)", calculo - bolinhas))
end