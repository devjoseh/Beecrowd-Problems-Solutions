while True:
    valor = int(input("A: "))

    if valor == 0:
        break
    else:
        calculo = valor % 2

        if calculo != 0:
            valor += 1
        
        formula = (valor) + (valor + 2) + (valor + 4) + (valor + 6) + (valor + 8)

        print(formula)