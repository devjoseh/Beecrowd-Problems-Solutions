infosProduto = io.read()
codigo, quantia = infosProduto:match("(%S+)%s+(%S+)")

codigoProduto, quantiaProduto = tonumber(codigo), tonumber(quantia)

precoProduto1 = 4
precoProduto2 = 4.5
precoProduto3 = 5
precoProduto4 = 2
precoProduto5 = 1.5

valorProduto = codigoProduto * quantiaProduto

if codigoProduto == 1 then
    valorProduto = precoProduto1 * quantiaProduto
    print(string.format("Total: R$ %.2f", valorProduto))
elseif codigoProduto == 2 then
    valorProduto = precoProduto2 * quantiaProduto
    print(string.format("Total: R$ %.2f", valorProduto))
elseif codigoProduto == 3 then
    valorProduto = precoProduto3 * quantiaProduto
    print(string.format("Total: R$ %.2f", valorProduto))
elseif codigoProduto == 4 then
    valorProduto = precoProduto4 * quantiaProduto
    print(string.format("Total: R$ %.2f", valorProduto))
elseif codigoProduto == 5 then
    valorProduto = precoProduto5 * quantiaProduto
    print(string.format("Total: R$ %.2f", valorProduto))
end