numeroFunc = tonumber(io.read())
horasTrab = tonumber(io.read())
valorHora = tonumber(io.read())

salario = horasTrab * valorHora

print(string.format("NUMBER = %d", numeroFunc))
print(string.format("SALARY = U$ %.2f", salario))