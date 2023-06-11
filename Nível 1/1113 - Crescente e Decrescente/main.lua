while true do
    valor = io.read()
    x1, x2 = valor:match("(%S+)%s+(%S+)")
    x1 = tonumber(x1)
    x2 = tonumber(x2)

    if x1 == x2 then 
        break
    else
        if x1 > x2 then 
            print("Decrescente")
        elseif x2 > x1 then
            print("Crescente")
        end
    end
end