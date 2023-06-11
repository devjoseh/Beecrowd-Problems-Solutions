valor = input("A ")

x1,x2 = valor.split(" ")

x1 = int(x1)
x2 = int(x2)

if x1 > x2:
    print(x1)
elif x2 > x1:
    print(x2)
elif x1 == x2:
    print(x1)
else:
    print("Erro")