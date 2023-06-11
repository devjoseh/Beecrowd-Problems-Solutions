valor = input("A: ")

x1,x2 = valor.split(" ")

x1 = float(x1)
x2 = float(x2)

txt = "%"

calc = ((x2 - x1) / x1) * 100

print(f"{calc:.2f}%")