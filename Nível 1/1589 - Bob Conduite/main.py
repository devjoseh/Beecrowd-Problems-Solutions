numero = int(input("Clc aq: "))

for i in range(1, numero + 1):
    valores = input("A: ")
    x1,x2 = valores.split(" ")
    x1 = int(x1)
    x2 = int(x2)
    calc = x2 + x1
    print(calc)