i = 1

for x = 1, 5 do 
    j = 7
    for x = 1, 3 do 
        print(string.format("I=%d J=%d", i, j))
        j = j - 1
    end
    i = i + 2
end