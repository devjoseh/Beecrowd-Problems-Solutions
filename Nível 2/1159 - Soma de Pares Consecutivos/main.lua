while true do
    valor = tonumber(io.read())

    if valor == 0 then
        break
    else
        calculo = valor % 2

        if calculo ~= 0 then
            valor = valor + 1
        end

        formula = (valor) + (valor + 2) + (valor + 4) + (valor + 6) + (valor + 8)
        print(formula)
    end
end