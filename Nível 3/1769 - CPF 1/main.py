while True:
    try:
        lista = input("A: ")
        lista = lista.replace("-", ".")
        lista = lista.replace(".", "")
        lista2 = list(lista)

        soma1 = 0
        multi = 1
        for i in range (0, 9):
            digito = int(lista2[i]) * multi
            soma1 += digito 
            multi += 1
        calc = soma1 % 11
        if calc == 10:
            calc = 0


        multi2 = 9
        soma2 = 0
        for i in range(0, 9):
            digito = int(lista2[i]) * multi2
            soma2 += digito
            multi2 -= 1
        calc2 = soma2 % 11
        if calc2 == 10:
            calc2 = 0

        if int(lista2[9]) == calc and int(lista2[10]) == calc2:
            print("CPF valido")
        else:
            print("CPF invalido")
    except EOFError:
        break