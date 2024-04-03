maxRepresentacao = int(input())
n1, operador, n2 = map(str, input().split())
n1 = int(n1)
n2 = int(n2)
calc = 0

if operador == "*":
    calc = n1 * n2
else:
    calc = n1 + n2 

if(calc > maxRepresentacao):
    print("OVERFLOW")
else:
    print("OK")   