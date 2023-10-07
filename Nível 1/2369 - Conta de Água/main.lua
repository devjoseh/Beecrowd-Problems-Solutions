consumo = tonumber(io.read())

if(consumo <= 10) then 
    print(7)
elseif (consumo <= 30) then 
    local calc = consumo - 10
    local calc = 7 + calc 
    print(calc)
elseif (consumo <= 100) then
    local calc = consumo - 30
    local calc = 20 + 7 + (calc * 2)
    print(calc)
elseif(consumo >= 101) then 
    local calc = consumo - 100
    local calc = 140 + 20 + 7 + (calc * 5)
    print(calc)
end