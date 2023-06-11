valor = int(input("A: "))

for i in range(1, valor + 1):
    texto = input("B: ")
    x1,x2 = texto.split(" ")
    
    x2 = int(x2)
    
    x1 = x1.lower()
    
    if x1 == "thor":
        print("Y")
    else:
        print("N")