x1,x2,x3=list(map(float,input().split()))

x1 = float(x1)
x2 = float(x2)
x3 = float(x3)

if (x1 < x2):
    formula = x1
    x1 = x2
    x2 = formula
if (x2 < x3):
    formula = x2
    x2 = x3
    x3 = formula
if (x1 < x2):
    formula = x1
    x1 = x2
    x2 = formula


if (x1 >= (x2+x3)):
    print('NAO FORMA TRIANGULO')
elif x1**2 == x2**2 + x3**2:
    print('TRIANGULO RETANGULO')
elif x1**2 > x2**2 + x3**2:
    print('TRIANGULO OBTUSANGULO')
elif x1**2 < x2**2 + x3**2:
    print('TRIANGULO ACUTANGULO')
if x1 == x2 == x3:
    print('TRIANGULO EQUILATERO')
elif x1 == x2 != x3 or x1 == x3 != x2 or x2 == x3 != x1:
    print('TRIANGULO ISOSCELES')