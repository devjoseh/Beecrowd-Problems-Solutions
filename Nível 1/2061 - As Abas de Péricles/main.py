valores = input("A: ").split(" ")

abas = int(valores[0])
quantia = int(valores[1])

for i in range(1, quantia + 1):
    texto = input("B: ")
    texto = texto.lower()

    if texto == "fechou":
        abas -= 1
        abas += 2
    
    if texto == "clicou":
        abas -= 1

print(abas)