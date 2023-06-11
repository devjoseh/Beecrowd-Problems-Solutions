quantidade = 0
idades = 0

while True:
    valor = float(input("A: "))

    if valor < 0:
        break
    else:
        quantidade += 1
        idades += valor

calculo = idades / quantidade

print("%.2f" % calculo)
