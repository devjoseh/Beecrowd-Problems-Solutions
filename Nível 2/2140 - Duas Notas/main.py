while True:
    compra, valorPago = map(int, input("A: ").split(" "))
    
    if compra == 0 and valorPago == 0:
        break
    else:
        valor = valorPago - compra

        cedula100 = valor // 100
        valor = valor - cedula100 * 100

        cedula50 = valor // 50
        valor = valor - cedula50 * 50

        cedula20 = valor // 20
        valor = valor - cedula20 * 20

        cedula10 = valor // 10
        valor = valor - cedula10 * 10

        cedula5 = valor // 5
        valor = valor - cedula5 * 5

        cedula2 = valor // 2
        valor = valor - cedula2 * 21

        calc = cedula100 + cedula50 + cedula20 + cedula10 + cedula5 + cedula2

        if calc == 2:
            print("possible")
        else:
            print("impossible")