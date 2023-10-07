while(True):
    quantia = int(input("A: "))
    if(quantia == 0): break 

    menor = 999999999999999
    civilizacao = "nenhum"

    for i in range(1, quantia + 1):
        nome, ano, tempo = map(str, input("B: ").split(" "))
        ano = int(ano)
        tempo = int(tempo)

        calc = ano - tempo 

        if(calc < menor):
            menor = calc
            civilizacao = nome
    
    print(civilizacao)

