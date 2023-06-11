valor = float(input("A: "))

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
cedula1 = float('%.2f' % cedula1)
valor = float('%.2f' % valor)

moeda50 = valor // 0.5
valor = valor - moeda50*0.5
moeda50=float('%.2f'% moeda50)
valor=float('%.2f'% valor)

moeda25 = valor // 0.25
valor = valor - moeda25 * 0.25
moeda25 = float('%.2f' % moeda25)
valor = float('%.2f' % valor)

moeda10 = valor // 0.10
valor = valor - moeda10 * 0.10
moeda10 = float('%.2f' % moeda10)
valor = float('%.2f' % valor)

moeda5 = valor // 0.05
valor = valor - moeda5 * 0.05
moeda5 = float('%.2f' % moeda5)
valor = float('%.2f' % valor)

moeda1 = valor * 100
moeda1 = float('%.2f' % moeda1)
valor = float('%.2f' % valor)

print("NOTAS:")
print("{} nota(s) de R$ 100.00".format(int(cedula100)))
print("{} nota(s) de R$ 50.00".format(int(cedula50)))
print("{} nota(s) de R$ 20.00".format(int(cedula20)))
print("{} nota(s) de R$ 10.00".format(int(cedula10)))
print("{} nota(s) de R$ 5.00".format(int(cedula5)))
print("{} nota(s) de R$ 2.00".format(int(cedula2)))
print("MOEDAS:")
print("{} moeda(s) de R$ 1.00".format(int(cedula1)))
print("{} moeda(s) de R$ 0.50".format(int(moeda50)))
print("{} moeda(s) de R$ 0.25".format(int(moeda25)))
print("{} moeda(s) de R$ 0.10".format(int(moeda10)))
print("{} moeda(s) de R$ 0.05".format(int(moeda5)))
print("{} moeda(s) de R$ 0.01".format(int(moeda1)))