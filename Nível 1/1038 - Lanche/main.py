infosProduto = input("Digite o código e a quantia de produtos separado por espaço: ")
codigo,quantia = infosProduto.split(" ")

codigoProduto = int(codigo)
quantiaProduto = int(quantia)

precoProduto1 = 4
precoProduto2 = 4.5
precoProduto3 = 5
precoProduto4 = 2
precoProduto5 = 1.5

valorProduto = codigoProduto * quantiaProduto

if codigoProduto == 1:
    valorProduto = precoProduto1 * quantiaProduto
    print("Total: R$ %.2f" % valorProduto)
elif codigoProduto == 2:
    valorProduto = precoProduto2 * quantiaProduto
    print("Total: R$ %.2f" % valorProduto)
elif codigoProduto == 3:
    valorProduto = precoProduto3 * quantiaProduto
    print("Total: R$ %.2f" % valorProduto)
elif codigoProduto == 4:
    valorProduto = precoProduto4 * quantiaProduto
    print("Total: R$ %.2f" % valorProduto)
elif codigoProduto == 5:
    valorProduto = precoProduto5 * quantiaProduto
    print("Total: R$ %.2f" % valorProduto)