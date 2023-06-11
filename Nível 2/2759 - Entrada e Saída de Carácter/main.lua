x1 = io.read()
x2 = io.read()
x3 = io.read()

print(string.format("A = %s, B = %s, C = %s", x1, x2, x3))
print(string.format("A = %s, B = %s, C = %s", x2, x3, x1))
print(string.format("A = %s, B = %s, C = %s", x3, x1, x2))