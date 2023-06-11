infosProduto1 = input("Digite as informações 1: ")
infosProduto2 = input("Digite as informações 2: ")

codigo1,pecas1,valor1 = infosProduto1.split(" ")
codigo2,pecas2,valor2 = infosProduto2.split(" ")

pecasProduto1 = float(pecas1)
pecasProduto2 = float(pecas2)

valorProduto1 = float(valor1)
valorProduto2 = float(valor2)

calculo1 = pecasProduto1 * valorProduto1
calculo2 = pecasProduto2 * valorProduto2

resultadoFinal = calculo1 + calculo2

print("VALOR A PAGAR: R$ %.2f" % resultadoFinal)