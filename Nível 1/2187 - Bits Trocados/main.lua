teste = 1

while true do
    valor = tonumber(io.read())

    if valor == 0 then break end

    cedula50 = math.floor(valor / 50)
    valor = valor - cedula50 * 50

    cedula10 = math.floor(valor / 10)
    valor = valor - cedula10 * 10

    cedula5 = math.floor(valor / 5)
    valor = valor - cedula5 * 5

    cedula1 = math.floor(valor / 1)
    valor = valor - cedula1 * 1

    print(string.format("Teste %d", teste))
    print(string.format("%d %d %d %d", cedula50, cedula10, cedula5, cedula1))
    print("")
    teste = teste + 1
end