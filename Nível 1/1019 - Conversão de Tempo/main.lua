numero = tonumber(io.read())

horas = math.floor(numero / 60 ^ 2)
numero = numero - horas * (60 * 60)

minutos = math.floor(numero / 60)
numero = numero - minutos * 60

segundos = numero 

print(string.format("%d:%d:%d", horas, minutos, segundos))