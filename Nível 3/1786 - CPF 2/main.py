while True:
    try:
        numeros = input("A: ")
        lista = list("".join(numeros))

        soma1 = 0
        multi = 1
        for i in range (0, 9):
            digito = int(lista[i]) * multi
            soma1 += digito 
            multi += 1
        calc = soma1 % 11
        if calc == 10:
            calc = 0
        
        multi2 = 9
        soma2 = 0
        for i in range(0, 9):
            digito = int(lista[i]) * multi2
            soma2 += digito
            multi2 -= 1
        calc2 = soma2 % 11
        if calc2 == 10:
            calc2 = 0

        print(f"{lista[0]}{lista[1]}{lista[2]}.{lista[3]}{lista[4]}{lista[5]}.{lista[6]}{lista[7]}{lista[8]}-{calc}{calc2}")
    except EOFError:
        break