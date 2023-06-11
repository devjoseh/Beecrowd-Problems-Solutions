valores = io.read()
x1, x2, x3, x4 = valores:match("(%S+)%s+(%S+)%s+(%S+)%s+(%S+)")

media1 = tonumber(x1) * 2
media2 = tonumber(x2) * 3
media3 = tonumber(x3) * 4
media4 = tonumber(x4) * 1

mediaFinal = (media1 + media2 + media3 + media4) / 10

print(string.format("Media: %.1f", mediaFinal))

if mediaFinal >= 7 then 
    print("Aluno aprovado.")
end

if mediaFinal < 5 then 
    print("Aluno reprovado.")
end

if mediaFinal >= 5 and mediaFinal <= 6.9 then
    print("Aluno em exame.")
    notaExame = tonumber(io.read())
    print(string.format("Nota do exame: %.1f", notaExame))
    mediaNova = (mediaFinal + notaExame) / 2

    if mediaNova >= 5 then 
        print("Aluno aprovado.")
        print(string.format("Media final: %.1f", mediaNova))
    else
        print("Aluno reprovado.")
        print(string.format("Media final: %.1f", mediaNova))
    end
end