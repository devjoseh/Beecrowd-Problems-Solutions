listaDeMusicas = [
    {"musica": "PROXYCITY", "id": 0},
    {"musica": "P.Y.N.G.", "id": 1},
    {"musica": "DNSUEY!", "id": 2},
    {"musica": "SERVERS", "id": 3},
    {"musica": "HOST!", "id": 4},
    {"musica": "CRIPTONIZE", "id": 5},
    {"musica": "OFFLINE DAY", "id": 6},
    {"musica": "SALT", "id": 7},
    {"musica": "ANSWER!", "id": 8},
    {"musica": "RAR?", "id": 9},
    {"musica": "WIFI ANTENNAS", "id": 10},
]

quantia = int(input("A: "))

for i in range(1,  quantia + 1):
    valores = input("B: ").split(" ")
    x1 = int(valores[0])
    x2 = int(valores[1])
    
    calc = x1 + x2 
    
    for musica in listaDeMusicas:
        if musica["id"] == calc:
            print(musica["musica"])
            break