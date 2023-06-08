import math

n = int(input("A: "))

a = n * n

if n % 2 == 0:
    b = (a/2)
    print("{} casas brancas e {} casas pretas".format(b, b))
else:
    b = (a/2)+1
    b = math.floor(b)
    a = math.ceil(a)
    print("{} casas brancas e {} casas pretas".format(b, a-b))