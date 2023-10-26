quantia = int(input("A: "))

menor = 9999999999999999999999

for i in range(1, quantia + 1):
    preco, gramas = map(float, input("B: ").split(" "))
    calc = (preco / gramas) * 1000

    if (calc < menor):
        menor = calc 

print(f"{menor:.2f}")