valores = input("A ")

x1,x2,x3 = valores.split()

a = float(x1)
b = float(x2)
c = float(x3)

if abs(b - c) < a < (b + c) and (a - c) < b < (a + c) and (a - b) < c < (a + b):
    print(f'Perimetro = {a+b+c:.1f}')
else:
    area = ((a + b) / 2) * c
    print(f'Area = {area:.1f}')