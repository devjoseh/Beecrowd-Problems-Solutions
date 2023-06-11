valor = tonumber(io.read())

for i = 1, valor do 
    if valor % i == 0 then 
        print(i)
    end
end