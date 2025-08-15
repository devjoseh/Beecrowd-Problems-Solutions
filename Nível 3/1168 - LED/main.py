lista = {
    "1": 2,
    "2": 5,
    "3": 5,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 3,
    "8": 7,
    "9": 6,
    "0": 6
}

quantidade = int(input())

for i in range(quantidade):
    ledsTotal = 0
    
    valor = str(input())

    for digito in valor:
        ledsTotal += lista[digito]
    
    print(f"{ledsTotal} leds")