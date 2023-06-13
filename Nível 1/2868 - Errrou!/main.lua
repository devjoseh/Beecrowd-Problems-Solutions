quantia = tonumber(io.read())

for i = 1, quantia do 
    dados = io.read()
    x1, sinal, x2, igual, resultado = dados:match("(%S+)%s+(%S+)%s+(%S+)%s+(%S+)%s+(%S+)")
    x1, x2, resultado = tonumber(x1), tonumber(x2), tonumber(resultado)
    
    if sinal == "+" then 
        calc = x1 + x2 
    elseif sinal == "-" then
        calc = x1 - x2 
    elseif sinal == "x" then 
        calc = x1 * x2
    end

    if resultado < calc then
        n1 = calc 
        n2 = resultado
    elseif resultado >= calc then
        n1 = resultado
        n2 = calc 
    end

    calc2 = n1 - n2 

    errou = string.rep("r", calc2)
    print(string.format("E%sou!", errou))
end