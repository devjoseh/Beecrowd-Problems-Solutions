numero = int(input("A: "))
valor = 1 

for i in range(1, numero + 1):
    print(f'{valor} {valor*valor} {valor*valor*valor}')
    valor = valor + 1