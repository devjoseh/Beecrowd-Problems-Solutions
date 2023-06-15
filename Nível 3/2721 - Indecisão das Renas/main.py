renas = ['Dasher', 'Dancer', 'Prancer', 'Vixen', 'Comet', 'Cupid', 'Donner', 'Blitzen', 'Rudolph']
numeros = list(map(int, input("A: ").split(" ")))
soma = sum(numeros)

i = 0

for j in range(soma):
    if i == 8:
        i = 0
    else:
        i += 1

print(renas[i - 1])