valores = input("A: ").split(" ")

quantia = int(valores[0])
dinheiro = int(valores[1])
lista = []

for i in range(1, quantia + 1):
    transferencia = int(input("B: "))

    if transferencia < 0:
        transferencia = str(transferencia)
        transferencia = transferencia.replace("-","")
        transferencia = int(transferencia)

        dinheiro -= transferencia
        lista.append(dinheiro)
    else:
        dinheiro += transferencia
        lista.append(dinheiro)

print(min(lista))