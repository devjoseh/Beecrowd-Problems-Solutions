valor = int(input("A: "))

isin = 0
isout = 0

for i in range(1, valor + 1):
    numero = int(input("B: "))

    if 10 <= numero <= 20:
        isin += 1
    else:
        isout += 1

print(f"{isin} in")
print(f"{isout} out")