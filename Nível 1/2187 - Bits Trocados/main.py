teste = 1

while (True):
    #Cedulas: 50, 10, 5, 1
    valor = int(input("Digite a quantia: "))

    if(valor == 0): break
   
    cedula50 = valor // 50
    valor = valor - cedula50 * 50 

    cedula10 = valor // 10
    valor = valor - cedula10 * 10 

    cedula5 = valor // 5
    valor = valor - cedula5 * 5 

    cedula1 = valor // 1
    valor = valor - cedula1 * 1
    cedula1 = float('%.2f' % cedula1)
    valor = float('%.2f' % valor)


    print(f"Teste {teste}")
    print(f"{cedula50} {cedula10} {cedula5} {cedula1:.0f}")
    print("")
    
    teste += 1

