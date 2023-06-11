username = input("Nome")
salarioFixo = float(input("Qual o salario fixo: "))
totalVendas = float(input("Quanto de total de vendas: "))

quantiaVendas = totalVendas * 0.15
salarioFinal = quantiaVendas + salarioFixo

print("TOTAL = R$ %.2f" % salarioFinal)