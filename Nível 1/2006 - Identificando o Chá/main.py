valor = int(input("A: "))
resposta = input("B: ").split(" ")
competidores = 0

if int(resposta[0]) == valor:
    competidores += 1

if int(resposta[1]) == valor:
    competidores += 1

if int(resposta[2]) == valor:
    competidores += 1

if int(resposta[3]) == valor:
    competidores += 1

if int(resposta[4]) == valor:
    competidores += 1

print(competidores)