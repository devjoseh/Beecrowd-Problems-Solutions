alcool = 0
gasolina = 0
diesel = 0
valor = 0

while valor ~= 4 do 
    valor = tonumber(io.read())

    if valor == 1 then
        alcool = alcool + 1
    end
    if valor == 2 then
        gasolina = gasolina + 1
    end
    if valor == 3 then
        diesel = diesel + 1
    end
end

print('MUITO OBRIGADO')
print(string.format("Alcool: %d", alcool))
print(string.format("Gasolina: %d", gasolina))
print(string.format("Diesel: %d", diesel))