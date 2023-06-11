valor = input("A: ")

crianca1,comprimento1,crianca2,comprimento2 = valor.split(" ")

crianca1 = int(crianca1)
comprimento1 = int(comprimento1)
crianca2 = int(crianca2)
comprimento2 = int(comprimento2)

calc1 = crianca1 * comprimento1
calc2 = crianca2 * comprimento2

formula = calc2 - calc1

if formula == 0:
    print("0")
elif formula > 0:
    print("1")
elif formula < 0:
    print("-1")
else:
    print("erro")