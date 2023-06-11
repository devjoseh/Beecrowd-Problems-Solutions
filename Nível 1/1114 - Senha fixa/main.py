senha = 0
while senha != 2002:
    senha = int(input("Senha: "))

    if senha == 2002:
        print("Acesso Permitido")
    else:
        print("Senha Invalida")