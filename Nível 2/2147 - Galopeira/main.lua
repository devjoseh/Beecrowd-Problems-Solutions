quantia = tonumber(io.read())

for i = 1, quantia do 
    texto = io.read()
    quantia = string.len(texto)
    calc = quantia/100
    print(string.format("%.2f", calc))
end
