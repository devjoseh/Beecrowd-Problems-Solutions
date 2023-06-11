idade = int(input("A: "))

anos = idade // 365

idade = idade - anos * 365
meses = idade // 30

idade = idade - meses * 30
dias = idade

print("{} ano(s)".format(anos))
print("{} mes(es)".format(meses))
print("{} dia(s)".format(dias))
	