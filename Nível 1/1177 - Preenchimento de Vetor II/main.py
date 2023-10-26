valor = int(input("a "))
valor -= 1
digito = 0

for j in range(1000):
    print(f"N[{j}] = {digito}")
    digito+=1
    if digito > valor: digito = 0