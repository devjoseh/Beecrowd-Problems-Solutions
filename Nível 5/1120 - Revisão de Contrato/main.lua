while true do
    input = io.read()
    digito, valorNegociado = input:match("(%S+)%s+(%S+)")
    digito, valorNegociado = tonumber(digito), tonumber(valorNegociado)

    if (digito == 0 and valorNegociado == 0) then
        break
    end

    removedNumber = string.gsub(valorNegociado, tostring(digito), "")

    if (removedNumber == "") then
        print(0)
    else
        print(tonumber(removedNumber))
    end
end