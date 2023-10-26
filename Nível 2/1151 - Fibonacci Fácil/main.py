valor = int(input("A: "))

fib_sequence = [0, 1]
while len(fib_sequence) < valor:
    fib_sequence.append(fib_sequence[-1] + fib_sequence[-2])

print(*fib_sequence)