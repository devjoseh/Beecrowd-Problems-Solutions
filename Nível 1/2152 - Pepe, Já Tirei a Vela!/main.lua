quantia = tonumber(io.read())

for i = 1, quantia do 
    dados = io.read()
    hora, minuto, status = dados:match("(%S+)%s+(%S+)%s+(%S+)")

    if hora == "0" then
        hora = "00"
    elseif tonumber(hora) < 10 then
        hora = "0" .. hora 
    end

    if minuto == "0" then
        minuto = "00"
    elseif tonumber(minuto) < 10 then
        minuto = "0" .. minuto 
    end

    status = tonumber(status)

    if status == 1 then
        print(string.format("%s:%s - A porta abriu!", hora, minuto))
    elseif status == 0 then
        print(string.format("%s:%s - A porta fechou!", hora, minuto))
    end
end