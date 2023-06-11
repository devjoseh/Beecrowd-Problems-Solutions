quantia = tonumber(io.read())

for i = 1, quantia do 
    valor = tonumber(io.read())

    if valor == 0 then
        print("NULL")
    elseif valor % 2 == 0 and valor < 0 then
        print("EVEN NEGATIVE")
    elseif valor % 2 == 1 and valor < 0 then
        print("ODD NEGATIVE")
    elseif valor % 2 == 0 and valor > 0 then
        print("EVEN POSITIVE")
    elseif valor % 2 == 1 and valor > 0 then
        print("ODD POSITIVE")
    end
end