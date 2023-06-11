salario = float(input("Qual o salario anterior: "))

if 0 <= salario <= 400.00:
    salarioPercentual = salario * 0.15
    salarioNovo = salario + salarioPercentual
    print("Novo salario: %.2f" % salarioNovo)
    print("Reajuste ganho: %.2f" % salarioPercentual)
    print("Em percentual: 15 %")
elif 400.01 <= salario <= 800.00:
    salarioPercentual = salario * 0.12
    salarioNovo = salario + salarioPercentual
    print("Novo salario: %.2f" % salarioNovo)
    print("Reajuste ganho: %.2f" % salarioPercentual)
    print("Em percentual: 12 %")
elif 800.01 <= salario <= 1200.00:
    salarioPercentual = salario * 0.10
    salarioNovo = salario + salarioPercentual
    print("Novo salario: %.2f" % salarioNovo)
    print("Reajuste ganho: %.2f" % salarioPercentual)
    print("Em percentual: 10 %")
elif 1200.01 <= salario <= 2000.00:
    salarioPercentual = salario * 0.07
    salarioNovo = salario + salarioPercentual
    print("Novo salario: %.2f" % salarioNovo)
    print("Reajuste ganho: %.2f" % salarioPercentual)
    print("Em percentual: 7 %")
else:
    salarioPercentual = salario * 0.04
    salarioNovo = salario + salarioPercentual
    print("Novo salario: %.2f" % salarioNovo)
    print("Reajuste ganho: %.2f" % salarioPercentual)
    print("Em percentual: 4 %")