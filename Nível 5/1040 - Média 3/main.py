valores = input("Coloque os valores:")
nm1,nm2,nm3,nm4 = valores.split()

media1 = float(nm1) * 2
media2 = float(nm2) * 3
media3 = float(nm3) * 4
media4 = float(nm4) * 1

mediaFinal = (media1 + media2 + media3 + media4) / 10

print("Media: %.1f" % mediaFinal)

if mediaFinal >= 7:
    print("Aluno aprovado.")
if mediaFinal < 5:
    print("Aluno reprovado.")
if 5 <= mediaFinal <= 6.9:
    print("Aluno em exame.")
    notaExame = float(input("Coloque a nota do aluno: "))
    print("Nota do exame: %.1f" % notaExame)
    mediaNova = (notaExame + mediaFinal) / 2

    if mediaNova >= 5:
        print("Aluno aprovado.")
        print("Media final: %.1f" % mediaNova)
    else:
        print("Aluno reprovado.")
        print("Media final: %.1f" % mediaNova)
