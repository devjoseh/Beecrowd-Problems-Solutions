while (True):
    quantiaQuestoes = int(input())

    if(quantiaQuestoes == 0): break

    letrasRespostas = ["A", "B", "C", "D", "E"]

    for i in range(1, quantiaQuestoes + 1):
        respostas = list(map(int, input().split()))
        pretos = 0
        brancos = 0
        resposta = False

        for j in range(5):
            if(respostas[j] <= 127):
                pretos += 1
                resposta = j
            else:
                brancos += 1
        
        if pretos > 1 or pretos == 0:
            print("*")
        else:
            print(letrasRespostas[resposta])