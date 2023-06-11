quantia = int(input("A: "))

cobaias = 0
coelhos = 0
ratos = 0
sapos = 0

for i in range(1, quantia + 1):
    info = input("B: ")
    x1,x2 = info.split(" ")
    x1 = int(x1)

    if x2 == "R":
        ratos += x1
    elif x2 == "S":
        sapos += x1
    elif x2 == "C":
        coelhos += x1 

    cobaias += x1

pCoelho = (coelhos / cobaias) * 100
pRato = (ratos / cobaias) * 100
pSapos = (sapos / cobaias) * 100

print(f"Total: {cobaias} cobaias")
print(f"Total de coelhos: {coelhos}")
print(f"Total de ratos: {ratos}")
print(f"Total de sapos: {sapos}")
print(f"Percentual de coelhos: {pCoelho:.2f} %")
print(f"Percentual de ratos: {pRato:.2f} %")
print(f"Percentual de sapos: {pSapos:.2f} %")