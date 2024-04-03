alunos, vencedor = map(int, input().split())
nomes = []

for i in range(1, alunos + 1):
    nomeAluno = str(input())
    nomes.append(nomeAluno)

nomes.sort()

alunoPremiado = vencedor - 1
print(nomes[alunoPremiado])