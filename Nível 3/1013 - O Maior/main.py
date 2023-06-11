valor = input("a: ")

valorA,valorB,valorC = valor.split()

numero1 = int(valorA)
numero2 = int(valorB)
numero3 = int(valorC)

formula = (numero1 + numero2 + abs(numero1 - numero2)) / 2
resultado = (formula + numero3 + abs(formula - numero3)) / 2

print("%d eh o maior" %resultado)