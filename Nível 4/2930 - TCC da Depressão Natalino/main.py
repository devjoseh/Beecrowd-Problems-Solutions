entregue, dataFinal = map(int, input().split())
calc = dataFinal - entregue

if(calc >= 3):
    print("Muito bem! Apresenta antes do Natal!")
elif(calc < 0):
    print("Eu odeio a professora!")
else:
    dataFinal += 2
    print("Parece o trabalho do meu filho!")

    if(dataFinal <= 24): 
        print("TCC Apresentado!")
    else:
        print("Fail! Entao eh nataaaaal!")