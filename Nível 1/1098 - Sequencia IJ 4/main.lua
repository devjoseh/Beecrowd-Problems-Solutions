seqI = 1
seqJ = 7

while(seqI < 10) do 
    for i = 1, 3 do
        print(string.format("I=%d J=%d", seqI, seqJ))
        seqJ = seqJ - 1
    end

    seqI = seqI + 2
    seqJ = seqI + 6
end