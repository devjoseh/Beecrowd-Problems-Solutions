quantia = int(input("A: "))

bonecos = 0
arquitetos = 0
musicos = 0
desenhistas = 0
total = 0

for i in range(1, quantia + 1):
    texto = input("B: ").split(" ")
    grupo = texto[1].lower()
    horas = int(texto[2])

    if grupo == "bonecos":
        bonecos += horas
    elif grupo == "arquitetos":
        arquitetos += horas
    elif grupo == "musicos":
        musicos += horas
    elif grupo == "desenhistas":
        desenhistas += horas
    
total += bonecos // 8
total += arquitetos // 4
total += musicos // 6
total += desenhistas // 12

print(total)