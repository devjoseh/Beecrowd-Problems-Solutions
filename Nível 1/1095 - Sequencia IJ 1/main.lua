vI = 1 
vJ = 60

while true do
    if vJ < 0 then 
        break 
    else
        print(string.format("I=%d J=%d", vI, vJ))
        vI = vI + 3
        vJ = vJ - 5
    end
end