username = io.read()
salarioFixo = tonumber(io.read())
totalVendas = tonumber(io.read())

quantiaVendas = totalVendas * 0.15
salarioFinal = quantiaVendas + salarioFixo

print(string.format("TOTAL = R$ %.2f", salarioFinal))