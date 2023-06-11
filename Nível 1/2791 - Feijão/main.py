valor = input("A ")

c1,c2,c3,c4 = valor.split(" ")

c1 = int(c1)
c2 = int(c2)
c3 = int(c3)
c4 = int(c4)

if c1 == 1 and c2 == 0 and c3 == 0 and c4 == 0:
    print("1")
elif c1 == 0 and c2 == 1 and c3 == 0 and c4 == 0:
    print("2")
elif c1 == 0 and c2 == 0 and c3 == 1 and c4 == 0:
    print("3")
elif c1 == 0 and c2 == 0 and c3 == 0 and c4 == 1:
    print("4")
else:
    print("Erro")