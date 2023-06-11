quantia = int(input("A: "))

for i in range(1, quantia + 1):
    valor = int(input("B: "))

    if valor == 0:
        print("NULL")
    elif valor % 2 == 0 and valor < 0:
        print("EVEN NEGATIVE")
    elif valor % 2 == 1 and valor < 0:
        print("ODD NEGATIVE")
    elif valor % 2 == 0 and valor > 0:
        print("EVEN POSITIVE")
    elif valor % 2 == 1 and valor > 0:
        print("ODD POSITIVE")