x1, x2, x3 = map(int, input("A: ").split(" "))
y1, y2, y3 = map(int, input("B: ").split(" "))

naoAtendido1 = 0
naoAtendido2 = 0
naoAtendido3 = 0

if x1 == 0:
    naoAtendido1 += y1
if x2 == 0:
    naoAtendido2 += y2
if x3 == 0:
    naoAtendido3 += y3

if x1 < y1:
  naoAtendido1 = y1-x1

if x2 < y2:
  naoAtendido2 = y2-x2

if x3 < y3:
  naoAtendido3 = y3-x3
 
print(naoAtendido1+naoAtendido2+naoAtendido3) 