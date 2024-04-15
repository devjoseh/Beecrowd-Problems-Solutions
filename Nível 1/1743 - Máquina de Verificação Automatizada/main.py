conector1 = list(map(int, input().split()))
conector2 = list(map(int, input().split()))
compativel = True

for i in range(5):
    if (conector1[i] == conector2[i]):
        compativel = False
        break

if(compativel):
    print("Y")
else:
    print("N")