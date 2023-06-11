local distancia = tonumber(io.read())

if distancia <= 800 then 
    print("1")
elseif distancia > 800 and distancia <= 1400 then 
    print("2")
elseif distancia > 1400 and distancia <= 2000 then
    print("3")
end