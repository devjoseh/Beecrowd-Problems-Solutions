entregas = int(input())
coposQuebrados = 0

for i in range(1, entregas + 1):
    latas, copos = map(int, input().split())
    
    if latas > copos:
        coposQuebrados += copos
        
print(coposQuebrados)