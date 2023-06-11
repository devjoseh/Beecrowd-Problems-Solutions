abertura = int(input("A: "))
quantia = int(input("B: "))
vistas = 0

for i in range(1, quantia + 1):
    fotons = int(input("C: "))
    calc = abertura * fotons 

    if calc >= 40000000:
        vistas += 1

print(vistas)