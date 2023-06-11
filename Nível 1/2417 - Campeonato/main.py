infos = input().split(" ")
vc, ec, gc = int(infos[0]), int(infos[1]), int(infos[2])
vf, ef, gf = int(infos[3]), int(infos[4]), int(infos[5])

pontosCor = (vc * 3) + (ec * 1)
pontosFla = (vf * 3) + (ef * 1)

if pontosCor > pontosFla:
    print("C")
elif pontosFla > pontosCor:
    print("F")
elif pontosFla == pontosCor:
    if gc > gf:
        print("C")
    elif gf > gc:
        print("F")
    elif gc == gf:
        print("=")
    else:
        print("erro")