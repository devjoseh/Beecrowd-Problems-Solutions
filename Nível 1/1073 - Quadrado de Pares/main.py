valor = int(input("Coloque o valor: "))
potencia = 2

for i in range(2 , valor + 1 , 2):
     print('{}^2 = {}'.format(i, i **2))