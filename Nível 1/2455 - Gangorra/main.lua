valor = io.read()

crianca1, comprimento1, crianca2, comprimento2 = valor:match("(%S+)%s+(%S+)%s+(%S+)%s+(%S+)")

crianca1, comprimento1, crianca2, comprimento2 = tonumber(crianca1), tonumber(comprimento1), tonumber(crianca2), tonumber(comprimento2)

calc1 = crianca1 * comprimento1
calc2 = crianca2 * comprimento2

formula = calc2 - calc1 

if formula == 0 then 
    print("0")
elseif formula > 0 then 
    print("1")
elseif formula < 0 then
    print("-1")
else
    print("erro")
end