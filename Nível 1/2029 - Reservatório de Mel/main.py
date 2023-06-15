while True:
    try:
        volume = float(input("A: "))
        diametro = float(input("B: "))

        raio = diametro / 2
        area = 3.14 * raio * raio 
        altura = volume / (raio * raio * 3.14)

        print(f"ALTURA = {altura:.2f}")
        print(f"AREA = {area:.2f}")  
    except EOFError:
        break