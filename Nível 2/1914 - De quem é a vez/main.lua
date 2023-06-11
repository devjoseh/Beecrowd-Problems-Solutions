quantia = tonumber(io.read())

for i = 1, quantia do
    texto = io.read()
    jogada = io.read()

    player1, escolha1, player2, escolha2 = texto:match("(%S+)%s+(%S+)%s+(%S+)%s+(%S+)")
    x1, x2 = jogada:match("(%S+)%s+(%S+)")
    
    x1 = tonumber(x1)
    x2 = tonumber(x2)

    jogador1 = escolha1 
    jogador2 = escolha2 

    venceu = 0

    calc = (x1 + x2) % 2

    if calc == 0 then
        venceu = 1
    elseif calc == 1 then
        venceu = 2
    end

    if venceu == 1 and jogador1 == "PAR" then
        print(player1)
    elseif venceu == 1 and jogador2 == "PAR" then
        print(player2)
    elseif venceu == 2 and jogador1 == "IMPAR" then
        print(player1)
    elseif venceu == 2 and jogador2 == "IMPAR" then
        print(player2)
    end
end