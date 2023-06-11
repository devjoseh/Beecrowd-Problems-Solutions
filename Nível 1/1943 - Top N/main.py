valor = int(input("A: "))

if valor == 1:
    print("Top 1")
elif valor <= 3:
    print("Top 3")
elif valor <= 5:
    print("Top 5")
elif valor <= 10:
    print("Top 10")
elif valor <= 25:
    print("Top 25")
elif valor <= 50:
    print("Top 50")
elif valor <= 100:
    print("Top 100")
else:
    print("Error")