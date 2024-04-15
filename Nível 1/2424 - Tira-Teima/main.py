coordX = 432
coordY = 468

bolaX, bolaY = map(int, input().split())
fora = False

if (bolaX < 0 or bolaX > coordX):
    fora = True

if(bolaY < 0 or bolaY > coordY):
    fora = True

if fora:
    print("fora")
else:
    print("dentro")