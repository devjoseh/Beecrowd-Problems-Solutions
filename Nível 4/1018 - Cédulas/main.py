valor = int(input("A: "))

print(valor)

cedula100 = valor // 100
valor = valor - cedula100 * 100

cedula50 = valor // 50
valor = valor - cedula50 * 50

cedula20 = valor // 20
valor = valor - cedula20 * 20

cedula10 = valor // 10
valor = valor - cedula10 * 10

cedula5 = valor // 5
valor = valor - cedula5 * 5

cedula2 = valor // 2
valor = valor - cedula2 * 2

cedula1 = valor // 1
valor = valor - cedula1 * 1

print("{} nota(s) de R$ 100,00".format(cedula100))
print("{} nota(s) de R$ 50,00".format(cedula50))
print("{} nota(s) de R$ 20,00".format(cedula20))
print("{} nota(s) de R$ 10,00".format(cedula10))
print("{} nota(s) de R$ 5,00".format(cedula5))
print("{} nota(s) de R$ 2,00".format(cedula2))
print("{} nota(s) de R$ 1,00".format(cedula1))