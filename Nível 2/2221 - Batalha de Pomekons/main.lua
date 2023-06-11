quantia = tonumber(io.read())

for i = 1, quantia do 
    bonus = tonumber(io.read())

    info1 = io.read()
    info2 = io.read()

    ataque1, defesa1, level1 = info1:match("(%S+)%s+(%S+)%s+(%S+)")
    ataque1 = tonumber(ataque1)
    defesa1 = tonumber(defesa1)
    level1 = tonumber(level1)

    ataque2, defesa2, level2 = info2:match("(%S+)%s+(%S+)%s+(%S+)")
    ataque2 = tonumber(ataque2)
    defesa2 = tonumber(defesa2)
    level2 = tonumber(level2)

    if level1 % 2 == 0 then
        calc1 = ((ataque1 + defesa1) / 2) + bonus
    else 
        calc1 = ((ataque1 + defesa1) / 2)
    end

    if level2 % 2 == 0 then
        calc2 = ((ataque2 + defesa2) / 2) + bonus
    else 
        calc2 = ((ataque2 + defesa2) / 2)
    end

    if calc1 > calc2 then
        print("Dabriel")
    elseif calc2 > calc1 then
        print("Guarte")
    else 
        print("Empate")
    end
end