quantia = tonumber(io.read())

for i = 1, quantia do
    dgt2 = i ^ 2
    dgt3 = i ^ 3

    print(string.format("%d %d %d",i, dgt2, dgt3))
    print(string.format("%d %d %d",i, dgt2+1, dgt3+1))
end