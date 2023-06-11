valores = io.read()
x1, x2, x3 = valores:match("(%S+)%s+(%S+)%s+(%S+)")
x1, x2, x3 = tonumber(x1), tonumber(x2), tonumber(x3)

if (x1 < x2) then 
    formula = x1
    x1 = x2
    x2 = formula 
end

if (x2 < x3) then 
    formula = x2 
    x2 = x3 
    x3 = formula 
end

if (x1 < x2) then 
    formula = x1
    x1 = x2 
    x2 = formula
end

if x1 >= (x2 + x3) then
    print('NAO FORMA TRIANGULO')
elseif x1^2 == x2^2 + x3^2 then
    print('TRIANGULO RETANGULO')
elseif x1^2 > x2^2 + x3^2 then
    print('TRIANGULO OBTUSANGULO')
elseif x1^2 < x2^2 + x3^2 then
    print('TRIANGULO ACUTANGULO')
end

if x1 == x2 and x2 == x3 then
    print('TRIANGULO EQUILATERO')
elseif x1 == x2 and x2 ~= x3 or x1 == x3 and x3 ~= x2 or x2 == x3 and x3 ~= x1 then
    print('TRIANGULO ISOSCELES')
end