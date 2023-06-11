valor = tonumber(io.read())

print(valor)

cedula100 = math.floor(valor / 100)
valor = valor - cedula100 * 100

cedula50 = math.floor(valor / 50)
valor = valor - cedula50 * 50

cedula20 = math.floor(valor / 20)
valor = valor - cedula20 * 20

cedula10 = math.floor(valor / 10)
valor = valor - cedula10 * 10

cedula5 = math.floor(valor / 5)
valor = valor - cedula5 * 5

cedula2 = math.floor(valor / 2)
valor = valor - cedula2 * 2

cedula1 = math.floor(valor / 1)
valor = valor - cedula1 * 1

print(string.format("%d nota(s) de R$ 100,00", cedula100))
print(string.format("%d nota(s) de R$ 50,00", cedula50))
print(string.format("%d nota(s) de R$ 20,00", cedula20))
print(string.format("%d nota(s) de R$ 10,00", cedula10))
print(string.format("%d nota(s) de R$ 5,00", cedula5))
print(string.format("%d nota(s) de R$ 2,00", cedula2))
print(string.format("%d nota(s) de R$ 1,00", cedula1))