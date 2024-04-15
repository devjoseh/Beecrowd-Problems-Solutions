quantiaCriancas = int(input())
bomComportamento = 0
malComportamento = 0
listaNomes = []

for i in range(1, quantiaCriancas + 1):
    comportamento, nomeCrianca = map(str, input().split())

    if(comportamento == "+"):
        bomComportamento += 1
    else:
        malComportamento += 1

    listaNomes.append(nomeCrianca)

listaNomes.sort()

for i in range(len(listaNomes)):
    print(listaNomes[i])

print(f"Se comportaram: {bomComportamento} | Nao se comportaram: {malComportamento}")