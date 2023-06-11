quantia = int(input("A: "))
lista = list(map(int, input("B: ").split()))

multi2 = 0
multi3 = 0
multi4 = 0
multi5 = 0

for valor in lista:
    if valor % 2 == 0:
        multi2 += 1

    if valor % 3 == 0:
        multi3 += 1
    
    if valor % 4 == 0:
        multi4 += 1

    if valor % 5 == 0:
        multi5 += 1

print(f"{multi2} Multiplo(s) de 2")
print(f"{multi3} Multiplo(s) de 3")
print(f"{multi4} Multiplo(s) de 4")
print(f"{multi5} Multiplo(s) de 5")