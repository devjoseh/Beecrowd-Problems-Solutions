numero = int(input("Clc aq: "))

compra = 0

for i in range(1, numero + 1):
    valores = input("A: ")
    x1,x2 = valores.split(" ")
    x1 = int(x1)
    x2 = int(x2)

    if x1 == 1001:
        calculo = 1.50 * x2
        compra += calculo
    elif x1 == 1002:
        calculo = 2.50 * x2
        compra += calculo
    elif x1 == 1003:
        calculo = 3.50 * x2
        compra += calculo
    elif x1 == 1004:
        calculo = 4.50 * x2
        compra += calculo
    elif x1 == 1005:
        calculo = 5.50 * x2
        compra += calculo

print("%.2f" % compra)