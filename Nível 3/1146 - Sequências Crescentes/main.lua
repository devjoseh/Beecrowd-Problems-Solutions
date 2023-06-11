while true do
    io.write("A: ")
    local valor = tonumber(io.read())

    if valor == 0 then
        break
    else
        for i = 1, valor - 1 do
            io.write(i, " ")
        end
        print(valor)
    end
end