valoresLidos = 0
media = 0

while valoresLidos != 2:
    valor = float(input("A: "))

    if valor < 0.0 or valor > 10.0:
        print("nota invalida")
    else:
        valoresLidos += 1
        media += valor

calc = media / 2
print(f"media = {calc:.2f}")