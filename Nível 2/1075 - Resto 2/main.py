valor = int(input("A: "))

quantia = 10000

for i in range(1, quantia + 1):
    calc = i % valor 

    if calc == 2:
        print(i)