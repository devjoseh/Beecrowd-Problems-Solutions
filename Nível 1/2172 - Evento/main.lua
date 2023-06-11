while true do
    valor = io.read()
    x1, x2 = valor:match("(%S+)%s+(%S+)")
    x1, x2 = tonumber(x1), tonumber(x2)

    if x1 == 0 and x2 == 0 then 
        break 
    else
        calc = x2 * x1
        print(calc)
    end
end