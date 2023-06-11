infos1 = input("A: ").split(" ")
infos2 = input("B: ").split(" ")

comprimento, pedagio = int(infos1[0]), int(infos1[1])
custoKm, custoPedagio = int(infos2[0]), int(infos2[1])

calc = comprimento // pedagio
calc = calc * custoPedagio + (comprimento * custoKm)

print(calc)