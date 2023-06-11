listaNumeros = []

for i in range(100):
    valor = int(input("A: "))

    listaNumeros.append(valor)

print(max(listaNumeros))
print(listaNumeros.index(max(listaNumeros))+1)