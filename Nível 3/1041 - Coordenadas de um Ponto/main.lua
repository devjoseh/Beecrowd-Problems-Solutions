informacao = io.read()
x,y = informacao:match("(%S+)%s+(%S+)")
x,y = tonumber(x), tonumber(y)

if x == 0 then
    if y == 0 then
        print('Origem')
    end
    if y ~= 0 then
        print('Eixo Y')
    end
end

if y == 0 then
    if x ~= 0 then
        print('Eixo X')
    end
end

if x > 0 then
    if y > 0 then
        print('Q1')
    end
    if y < 0 then
        print('Q4')
    end
end

if x < 0 then
    if y > 0 then
        print('Q2')
    end
    if y < 0 then
        print('Q3')
    end
end