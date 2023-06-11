lista_itens = [
    ["suco", 120],
    ["morango", 85],
    ["mamao", 85],
    ["goiaba", 70],
    ["manga", 56],
    ["laranja", 50],
    ["brocolis", 34]
]

while True:
    quantia = int(input("A: "))
    mg = 0

    if quantia == 0:
        break

    for i in range(quantia):
        infos = input("B: ").split(" ")
        x1 = int(infos[0])
        x2 = infos[1]
        
        for item in lista_itens:
            if x2.lower() in item[0].lower():
                mg += x1 * item[1]
    
    if 110 <= mg <= 130:
        print(f"{mg} mg")

    if mg > 130:
        print(f"Menos {mg - 130} mg")

    if mg < 110:
        print(f"Mais {110 - mg} mg")
    