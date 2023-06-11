numeros = input("A: ")

nm1,nm2 = numeros.split()

numero1 = int(nm1)
numero2 = int(nm2)

calculo = numero2 / numero1

if int(calculo) == calculo:
    print("Sao Multiplos")
else:
    print("Nao sao Multiplos")