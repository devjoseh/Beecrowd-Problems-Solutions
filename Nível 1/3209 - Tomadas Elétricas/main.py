quantia = int(input("A: "))

for i in range(1, quantia + 1):
    valores = list(map(int, input("B: ").split()))
    tomada = valores[0] - 1
    valores.pop(0)
    soma = sum(valores)
    calc =  soma - tomada 
    print(calc)