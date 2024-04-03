gritos = 0
soma = 0

while(gritos < 3):
    texto = str(input())

    if(texto == "caw caw"): 
        print(soma)
        soma = 0
        gritos += 1
    else:
        valores = [letra for letra in texto]
        
        if(valores[0] == "*"):
            soma += 4
        if(valores[1] == "*"):
            soma += 2
        if(valores[2] == "*"):
            soma += 1

