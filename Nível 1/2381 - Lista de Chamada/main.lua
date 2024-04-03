alunos, vencedor = io.read():match("(%S+)%s+(%S+)")
nomes = {}

for i = 1, alunos do 
    nomesAluno = io.read()
    table.insert(nomes, nomesAluno)
end

table.sort(nomes)
print(nomes[tonumber(vencedor)])