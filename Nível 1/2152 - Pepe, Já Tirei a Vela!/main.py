quantia = int(input("A: "))

for i in range(1, quantia + 1):
    hora, minuto, status = map(str, input("B: ").split(" "))

    if hora == "0":
        hora = "00"
    elif int(hora) < 10:
        hora = "0" + hora
    
    if minuto == "0":
        minuto = "00"
    elif int(minuto) < 10:
        minuto = "0" + minuto

    status = int(status)

    if status == 1:
        print(f"{hora}:{minuto} - A porta abriu!")
    elif status == 0:
        print(f"{hora}:{minuto} - A porta fechou!")