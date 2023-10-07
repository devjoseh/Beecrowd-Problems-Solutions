repeat
    quantia = tonumber(io.read())
    if(quantia == 0) then break end 
    
    menor = 99999999999999
    civilizacao = "nenhum"

    for i = 1, quantia do
        infos = io.read()
        nome, ano, tempo = infos:match("(%S+)%s+(%S+)%s+(%S+)")
        ano = tonumber(ano)
        tempo = tonumber(tempo)

        calc = ano - tempo 

        if(calc < menor) then 
            menor = calc 
            civilizacao = nome
        end
    end

    print(civilizacao)
until false