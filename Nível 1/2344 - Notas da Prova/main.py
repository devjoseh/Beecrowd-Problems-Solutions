nota = int(input("Qual foi a nota: "))

if nota == 0:
    print("E")
elif nota < 35:
    print("D")
elif nota < 60:
    print("C")
elif nota < 85:
    print("B")
elif nota < 100:
    print("A")