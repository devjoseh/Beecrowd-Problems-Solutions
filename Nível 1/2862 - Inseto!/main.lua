quantia = tonumber(io.read())

for i = 1, quantia do 
    valor = tonumber(io.read())

    if valor > 8000 then
        print("Mais de 8000!")
    else
        print("Inseto!")
    end
end