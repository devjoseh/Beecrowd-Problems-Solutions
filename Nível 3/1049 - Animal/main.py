informacao1 = input("A:")
informacao2 = input("B:")
informacao3 = input("C:")

if informacao1 == "vertebrado":

    if informacao2 == "ave":
        if informacao3 == "carnivoro":
            print("aguia")
        elif informacao3 == "onivoro":
            print("pomba")
        else:
            print("erro")

    elif informacao2 == "mamifero":
        if informacao3 == "onivoro":
            print("homem")
        elif informacao3 == "herbivoro":
            print("vaca")
        else:
            print("erro")

if informacao1 == "invertebrado":

    if informacao2 == "inseto":
        if informacao3 == "hematofago":
            print("pulga")
        elif informacao3 == "herbivoro":
            print("lagarta")
        else:
            print("erro")
    elif informacao2 == "anelideo":
        if informacao3 == "hematofago":
            print("sanguessuga")
        elif informacao3 == "onivoro":
            print("minhoca")
        else:
            print("erro")