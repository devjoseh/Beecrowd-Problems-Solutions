idade = tonumber(io.read())

anos = math.floor(idade / 365)

idade = idade - anos * 365
meses = math.floor(idade / 30)

idade = idade - meses * 30
dias = idade 

print(string.format("%d ano(s)", anos))
print(string.format("%d mes(es)", meses))
print(string.format("%d dia(s)", dias))