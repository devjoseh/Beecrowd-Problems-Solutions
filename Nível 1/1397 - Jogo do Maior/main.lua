repeat
    local quantia = tonumber(io.read())

    if quantia == 0 then
        break
    end

    local jgdr1 = 0
    local jgdr2 = 0

    for i = 1, quantia do
        local x1, x2 = io.read():match("(%S+)%s+(%S+)")

        x1 = tonumber(x1)
        x2 = tonumber(x2)

        if x1 > x2 then
            jgdr1 = jgdr1 + 1
        elseif x2 > x1 then
            jgdr2 = jgdr2 + 1
        end
    end

    print(string.format("%d %d", jgdr1, jgdr2))
until false