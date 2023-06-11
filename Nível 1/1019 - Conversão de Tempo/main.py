numero = int(input("A: "))

horas = numero // 60 ** 2

numero = numero - horas * 60 ** 2
minutos = numero // 60

numero = numero - minutos * 60
segundos = numero

print("{}:{}:{}".format(horas, minutos, segundos))

