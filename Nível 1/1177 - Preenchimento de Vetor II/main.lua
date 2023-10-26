valor = tonumber(io.read())
valor = valor - 1
digito = 0

for i = 0, 999 do 
    print(string.format("N[%s] = %s", i, digito))
    digito = digito + 1
    if digito > valor then digito = 0 end
end