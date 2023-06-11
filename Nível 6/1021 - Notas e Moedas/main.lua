valor = tonumber(io.read())

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
cedula1 = string.format("%.2f", cedula1)
valor = string.format("%.2f", valor)

moeda50 = math.floor(valor / 0.5)
valor = valor - moeda50 * 0.5
moeda50 = string.format("%.2f", moeda50)
valor = string.format("%.2f", valor)

moeda25 = math.floor(valor / 0.25)
valor = valor - moeda25 * 0.25
moeda25 = string.format("%.2f", moeda25)
valor = string.format("%.2f", valor)

moeda10 = math.floor(valor / 0.10)
valor = valor - moeda10 * 0.10
moeda10 = string.format("%.2f", moeda10)
valor = string.format("%.2f", valor)

moeda5 = math.floor(valor / 0.05)
valor = valor - moeda5 * 0.05
moeda5 = string.format("%.2f", moeda5)
valor = string.format("%.2f", valor)

moeda1 = valor * 100
moeda1 = string.format("%.2f", moeda1)
valor = string.format("%.2f", valor)

print("NOTAS:")
print(string.format("%d nota(s) de R$ 100.00", cedula100))
print(string.format("%d nota(s) de R$ 50.00", cedula50))
print(string.format("%d nota(s) de R$ 20.00", cedula20))
print(string.format("%d nota(s) de R$ 10.00", cedula10))
print(string.format("%d nota(s) de R$ 5.00", cedula5))
print(string.format("%d nota(s) de R$ 2.00", cedula2))
print("MOEDAS:")
print(string.format("%d moeda(s) de R$ 1.00", cedula1))
print(string.format("%d moeda(s) de R$ 0.50", moeda50))
print(string.format("%d moeda(s) de R$ 0.25", moeda25))
print(string.format("%d moeda(s) de R$ 0.10", moeda10))
print(string.format("%d moeda(s) de R$ 0.05", moeda5))
print(string.format("%d moeda(s) de R$ 0.01", moeda1))