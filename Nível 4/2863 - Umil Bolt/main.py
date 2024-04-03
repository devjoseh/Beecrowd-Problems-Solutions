while True:
    try:
        quantia = int(input())

        menorTempo = 9999999999999999999999
        for i in range(1, quantia + 1):
            
            tempo = float(input())
            if tempo < menorTempo:
                menorTempo = tempo
        
        print(menorTempo)
    except EOFError:
        break