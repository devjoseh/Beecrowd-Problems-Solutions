valor = int(input("A: "))
kms = 0

for i in range(1, valor + 1):
    intervaloTempo = input("B: ")
    x1,x2 = intervaloTempo.split(" ")

    x1 = int(x1)
    x2 = int(x2)

    formula = x2 * x1
    kms += formula

print(kms)