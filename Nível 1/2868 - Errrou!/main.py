quantia = int(input("A: "))

for i in range(1, quantia + 1):
    dados = list(map(str, input("B: ").split(" ")))

    if dados[1] == "+":
        calc = int(dados[0]) + int(dados[2])
    elif dados[1] == "-":
        calc = int(dados[0]) - int(dados[2])
    elif dados[1] == "x":
        calc = int(dados[0]) * int(dados[2])
    
    if int(dados[4]) < calc:
        x1 = calc
        x2 = int(dados[4])
    elif int(dados[4]) >= calc:
        x1 = int(dados[4])
        x2 = calc
    
    calc2 = x1 - x2 

    errou = "r" * calc2

    print(f"E{errou}ou!")