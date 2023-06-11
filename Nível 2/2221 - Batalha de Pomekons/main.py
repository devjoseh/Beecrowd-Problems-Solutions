quantia = int(input("A: "))

for i in range(1, quantia + 1):
    bonus = int(input("B: "))

    info1 = input("C: ")
    info2 = input("D: ")

    ataque1,defesa1,level1 = info1.split(" ")
    ataque1 = int(ataque1)
    defesa1 = int(defesa1)
    level1 = int(level1)

    ataque2,defesa2,level2 = info2.split(" ")
    ataque2 = int(ataque2)
    defesa2 = int(defesa2)
    level2 = int(level2)

    if level1 % 2 == 0:
        calc1 = ((ataque1 + defesa1) / 2) + bonus
    else:
        calc1 = ((ataque1 + defesa1) / 2)
    
    if level2 % 2 == 0:
        calc2 = ((ataque2 + defesa2) / 2) + bonus
    else:
        calc2 = ((ataque2 + defesa2) / 2)

    if calc1 > calc2:
        print("Dabriel")
    elif calc2 > calc1:
        print("Guarte")
    else:
        print("Empate")

