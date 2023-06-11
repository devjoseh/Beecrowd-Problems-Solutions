valor = input("A: ")
x1,x2,x3 = valor.split(" ")

x1 = int(x1)
x2 = int(x2)
x3 = int(x3)

calc = x1 + x2 + x3 

if 0 <= calc <= 23:
    print(calc)
elif calc > 24:
    calc = calc - 24
    print(calc)
elif calc < 0:
    calc = abs(calc)
    calc = 24 - calc 
    print(calc)