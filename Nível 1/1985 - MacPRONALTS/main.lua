numero = tonumber(io.read())
compra = 0

for i = 1, numero do 
    valores = io.read()
    x1, x2 = valores:match("(%S+)%s+(%S+)")
    x1,x2 = tonumber(x1), tonumber(x2)

    if x1 == 1001 then
        calculo = 1.50 * x2
        compra = compra + calculo
    elseif x1 == 1002 then
        calculo = 2.50 * x2
        compra = compra + calculo
    elseif x1 == 1003 then
        calculo = 3.50 * x2
        compra = compra + calculo
    elseif x1 == 1004 then
        calculo = 4.50 * x2
        compra = compra + calculo
    elseif x1 == 1005 then
        calculo = 5.50 * x2
        compra = compra + calculo
    end
end

print(string.format("%.2f", compra))