quantia = int(input())
valores = list(map(int, input().split()))
queda = 0
medida = 1
achado = False

for velocidade in valores:
    if(velocidade < queda):
        print(medida)
        achado = True
        break
    else:
        queda = velocidade
        medida += 1

if(achado == False):
    print(0)