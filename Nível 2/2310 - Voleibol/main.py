quantia = int(input("AA: "))

saque = 0
saqueS = 0

block = 0
blockS = 0

atck = 0
atckS = 0

for i in range(1, quantia + 1):
    nome = input("A: ")
    x1, x2, x3 = input("B: ").split(" ")
    x1, x2, x3 = int(x1), int(x2), int(x3)
    y1, y2, y3 = input("C: ").split(" ")
    y1, y2, y3 = int(y1), int(y2), int(y3)

    saque += x1 
    saqueS += y1

    block += x2
    blockS += y2 

    atck += x3 
    atckS += y3

pontoS = 100 * (saqueS / saque)
pontoB = 100 * (blockS / block)
pontoA = 100 * (atckS / atck)

print(f"Pontos de Saque: {pontoS:.2f} %.")
print(f"Pontos de Bloqueio: {pontoB:.2f} %.")
print(f"Pontos de Ataque: {pontoA:.2f} %.")