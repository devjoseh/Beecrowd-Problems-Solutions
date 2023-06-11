quantia = int(input("Digite o valor: "))

for i in range(1, quantia + 1):
    texto = input("Digite o bglh:")
    jogada = input("Jogue os numeros")
    
    player1,escolha1,player2,escolha2 = texto.split(" ")
    x1,x2 = jogada.split(" ")
    
    x1 = int(x1)
    x2 = int(x2)
    
    jogador1 = escolha1
    jogador2 = escolha2
    
    venceu = 0
    
    calc = (x1 + x2) % 2
    
    if calc == 0:
        venceu = 1
    elif calc == 1:
        venceu = 2
    
    if venceu == 1 and jogador1 == "PAR":
        print(player1)
    elif venceu == 1 and jogador2 == "PAR":
        print(player2)
    elif venceu == 2 and jogador1 == "IMPAR":
        print(player1)
    elif venceu == 2 and jogador2 == "IMPAR":
        print(player2)