valor = input("A: ")
x1,x2 = valor.split(" ")

x1 = int(x1)
x2 = int(x2)

formula = ((x1 % x2) + x2) % x2 

print(formula)