consumo = int(input("A: "))

# 10 = 7
# 11 - 30 = x1
# 31 - 100 = x2
# +101 = x5

if(consumo <= 10):
    print(7)
elif 11 <= consumo <= 30:
    calc = (consumo - 10)
    calc = 7 + calc 
    print(calc)
elif 31 <= consumo <= 100:
    calc = (consumo - 30)
    calc = 20 + 7 + (calc * 2)
    print(calc)
elif consumo >= 101:
    calc = (consumo - 100)
    calc = 140 + 20 + 7 + (calc * 5)
    print(calc)