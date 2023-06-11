def encontrar_soma(lista, alvo):
    numeros = {}  

    for i, num in enumerate(lista):
        complemento = alvo - num 

        if complemento in numeros:
            return [num, complemento]
        else:
            numeros[num] = i  
    return None

quantia = int(input("A: "))
numeros = []
for i in range(1, quantia + 1):
    num = int(input("B: "))
    numeros.append(num)

alvo = int(input("C: "))

resultado = encontrar_soma(numeros, alvo)

print(f"{resultado[1]} {resultado[0]}")