quantia = int(input("A: "))

numeros = list(map(int, input("B: ").split(" ")))

aprova = 0
nega = 0

for voto in numeros:
    if voto == 0:
        aprova+= 1
    else:
        nega+= 1

if nega >= aprova:
    print("N")
else:
    print("N")