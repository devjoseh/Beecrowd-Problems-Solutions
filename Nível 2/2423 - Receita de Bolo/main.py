ingredientes = input("A: ").split(" ")

trigo = int(ingredientes[0])
ovo = int(ingredientes[1])
leite = int(ingredientes[2])

print(min(trigo//2, ovo//3, leite//5))