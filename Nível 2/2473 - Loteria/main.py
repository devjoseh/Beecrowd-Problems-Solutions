lista1 = list(map(int, input("A: ").split(" ")))
lista2 = list(map(int, input("B: ").split(" ")))

valores_repetidos = set(lista1) & set(lista2)

if len(valores_repetidos) < 3:
    print("azar")
elif len(valores_repetidos) == 3:
    print("terno")
elif len(valores_repetidos) == 4:
    print("quadra")
elif len(valores_repetidos) == 5:
    print("quina")
elif len(valores_repetidos) == 6:
    print("sena")