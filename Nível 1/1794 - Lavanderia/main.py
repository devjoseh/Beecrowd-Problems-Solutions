pecas = int(input())
l1, l2 = map(int, input().split())
s1, s2 = map(int, input().split())

lavar = pecas >= l1 and pecas <= l2
secar = pecas >= s1 and pecas <= s2

if(lavar and secar):
    print("possivel")
else:
    print("impossivel")
