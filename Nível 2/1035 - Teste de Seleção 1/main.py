valores = input("Digite os valores")

nmA,nmB,nmC,nmD = valores.split()

numeroA = int(nmA)
numeroB = int(nmB)
numeroC = int(nmC)
numeroD = int(nmD)

if numeroB > numeroC and numeroD > numeroA and (numeroC + numeroD) > (numeroA + numeroB) and numeroC > 0 and numeroD > 0 and numeroA % 2 == 0:
    print("Valores aceitos")
else:
    print("Valores nao aceitos")