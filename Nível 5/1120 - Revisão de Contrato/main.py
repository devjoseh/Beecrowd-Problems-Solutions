while (True):
    digito, valorNegociado = map(int, input().split(" "))

    if(digito == 0 and valorNegociado == 0): break

    removedNumber = str(valorNegociado).replace(str(digito), "")

    if(removedNumber == ""):
        print("0")
    else:
        print(int(removedNumber))