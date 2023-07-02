while True:
    try:
        pessoas, datas = map(int, input("A: ").split(" "))
        presencas = 0
        setado = False

        for i in range(1, datas + 1):
            dados = list(map(int, input("B: ").replace("/", " ").split(" ")))

            dia = dados[0]
            mes = dados[1]
            ano = dados[2]

            dados = dados[3:]

            def verificaNum(lista):
                for numero in lista:
                    if '1' not in str(numero):
                        return False
                return True

            resultado = verificaNum(dados)

            if resultado:
                if setado == False:
                    dataFinal = dia, mes, ano
                    setado = True
            else:
                continue
        

        if setado == True:
            print(f"{dataFinal[0]}/{dataFinal[1]}/{dataFinal[2]}")
        elif setado == False:
            print("Pizza antes de FdI")
    except EOFError:
        break