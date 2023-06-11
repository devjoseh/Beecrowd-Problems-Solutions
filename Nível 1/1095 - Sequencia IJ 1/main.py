'''
I=1 J=60
I=4 J=55
I=7 J=50
...
I=? J=0
'''

vI = 1 
vJ = 60

while True:
    if vJ < 0:
        break 
    else: 
        print(f"I={vI} J={vJ}")
        vI += 3
        vJ -= 5