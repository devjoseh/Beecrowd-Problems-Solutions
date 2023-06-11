n1,n2,n3 = map(int,input().split())

lista = [n1,n2,n3]
lista2 = sorted(lista)

for i in range(len(lista)):
    print(lista2[i])

print()

for i in range(len(lista2)):
    print(lista[i])