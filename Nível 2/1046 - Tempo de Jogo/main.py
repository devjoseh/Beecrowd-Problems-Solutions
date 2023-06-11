valores = input("A: ")

x1, x2 = valores.split()

x1 = int(x1)
x2 = int(x2)

if x1 < x2:
    tempo = x2 - x1
else:
    tempo = (24 - x1) + x2

print("O JOGO DUROU {} HORA(S)".format(tempo))