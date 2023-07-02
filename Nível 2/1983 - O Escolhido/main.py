quantia = int(input("A: "))
matricula = 0
maiorNota = 0

for i in range(1, quantia + 1):
    mat, nota = map(float, input("B: ").split(" "))

    if nota > maiorNota and nota >= 8:
        matricula = mat 
        maiorNota = nota

if maiorNota == 0:
    print("Minimum note not reached")
else:
    print(f"{matricula:.0f}")