minutos = int(input("A: "))
x1, x2 = map(int, input("A: ").split(" "))

calc = x1 + x2 

if calc > minutos:
    print("Deixa para amanha!")
else:
    print("Farei hoje!")