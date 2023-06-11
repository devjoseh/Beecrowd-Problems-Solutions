valor = tonumber(io.read())
quantia = 10000

for i = 1, quantia do
    calc = i % valor 

    if calc == 2 then
        print(i)
    end
end