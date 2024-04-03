seqI = 1
seqJ = 7

while (seqI < 10):
    for i in range(1, 3 + 1):
        print(f"I={seqI} J={seqJ}")
        seqJ -= 1
    seqI += 2
    seqJ = seqI + 6
    