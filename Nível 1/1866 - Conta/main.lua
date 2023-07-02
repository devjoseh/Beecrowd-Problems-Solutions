quantia = tonumber(io.read())

for i = 1, quantia do
    num = tonumber(io.read())

    if num % 2 == 0 then
        print(0)
    else
        print(1)
    end
end