quantia = tonumber(io.read())

matricula = 0
maiorNota = 0

for i = 1, quantia do
    valores = io.read() 
    mat, nota = valores:match("(%S+)%s+(%S+)")
    mat, nota = tonumber(mat), tonumber(nota)

    if nota > maiorNota and nota >= 8 then
        matricula = mat 
        maiorNota = nota 
    end
end

if maiorNota == 0 then
    print("Minimum note not reached")
else
    print(string.format("%.0f", matricula))
end