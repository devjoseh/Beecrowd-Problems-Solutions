alcool = 0
gasolina = 0
diesel = 0
valor = 0

while valor != 4:
    valor = int(input())
    if valor == 1:
        alcool = alcool + 1
    if valor == 2:
        gasolina = gasolina + 1
    if valor == 3:
        diesel = diesel + 1
        
print('MUITO OBRIGADO')
print('Alcool: {}'.format(alcool))
print('Gasolina: {}'.format(gasolina))
print('Diesel: {}'.format(diesel))