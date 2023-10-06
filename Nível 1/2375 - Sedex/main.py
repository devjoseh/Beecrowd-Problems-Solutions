diametroBola = int(input("A: "))
alturaC, larguraC, profundC = map(int, input().split())

cabe = True

if(diametroBola > alturaC or diametroBola > larguraC or diametroBola > profundC):
    cabe = False 

if(cabe == True):
    print("S")
else:
    print("N")