valor = int(input())

for i in range(1, valor + 1):
    ano = int(input())
    calc = ano - 2015
    if calc < 0:
        print("{0} D.C.".format(-calc))
    elif calc == 0:
        print('1 A.C.')
    else:
        print('{0} A.C.'.format(calc+1))