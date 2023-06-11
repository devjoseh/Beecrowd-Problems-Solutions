par = 0
impar = 0
positivo = 0
negativo = 0

for i in range(5):
    valor = int(input("A: "))

    if valor > 0:
        positivo += 1 
    if valor < 0:
        negativo += 1

    calculo = valor % 2 

    if calculo == 0:
        par += 1 
    if calculo != 0:
        impar += 1

print(f"{par} valor(es) par(es)")
print(f"{impar} valor(es) impar(es)")
print(f"{positivo} valor(es) positivo(s)")
print(f"{negativo} valor(es) negativo(s)")