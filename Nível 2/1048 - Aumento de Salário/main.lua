salario = tonumber(io.read())

if salario <= 400.00 then
    salarioPercentual = salario * 0.15
    salarioNovo = salario + salarioPercentual
    print(string.format("Novo salario: %.2f", salarioNovo))
    print(string.format("Reajuste ganho: %.2f", salarioPercentual))
    print("Em percentual: 15 %")
elseif salario <= 800.00 then
    salarioPercentual = salario * 0.12
    salarioNovo = salario + salarioPercentual
    print(string.format("Novo salario: %.2f", salarioNovo))
    print(string.format("Reajuste ganho: %.2f", salarioPercentual))
    print("Em percentual: 12 %")
elseif salario <= 1200 then 
    salarioPercentual = salario * 0.10
    salarioNovo = salario + salarioPercentual
    print(string.format("Novo salario: %.2f", salarioNovo))
    print(string.format("Reajuste ganho: %.2f", salarioPercentual))
    print("Em percentual: 10 %")
elseif salario <= 2000 then 
    salarioPercentual = salario * 0.07
    salarioNovo = salario + salarioPercentual
    print(string.format("Novo salario: %.2f", salarioNovo))
    print(string.format("Reajuste ganho: %.2f", salarioPercentual))
    print("Em percentual: 7 %")
else
    salarioPercentual = salario * 0.04
    salarioNovo = salario + salarioPercentual
    print(string.format("Novo salario: %.2f", salarioNovo))
    print(string.format("Reajuste ganho: %.2f", salarioPercentual))
    print("Em percentual: 4 %")
end