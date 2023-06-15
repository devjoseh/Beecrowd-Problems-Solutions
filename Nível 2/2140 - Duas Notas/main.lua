while true do 
    dados = io.read()
    compra, valorPago = dados:match("(%S+)%s+(%S+)")
    compra, valorPago = tonumber(compra), tonumber(valorPago)

    if compra == 0 and valorPago == 0 then
        break
    else
        valor = valorPago - compra

        cedula100 = math.floor(valor / 100)
        valor = valor - cedula100 * 100

        cedula50 = math.floor(valor / 50)
        valor = valor - cedula50 * 50

        cedula20 = math.floor(valor / 20)
        valor = valor - cedula20 * 20

        cedula10 = math.floor(valor / 10)
        valor = valor - cedula10 * 10

        cedula5 = math.floor(valor / 5)
        valor = valor - cedula5 * 5

        cedula2 = math.floor(valor / 2)
        valor = valor - cedula2 * 2

        cedula1 = math.floor(valor / 1)
        valor = valor - cedula1 * 1

        calc = cedula100 + cedula50 + cedula20 + cedula10 + cedula5 + cedula2

        if calc == 2 then
            print("possible")
        else
            print("impossible")
        end
    end

end