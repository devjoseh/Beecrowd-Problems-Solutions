info1 = io.read()
info2 = io.read()

x1, y1 = info1:match("(%S+)%s+(%S+)")
x2, y2 = info2:match("(%S+)%s+(%S+)")

x1, y1, x2, y2 = tonumber(x1), tonumber(y1), tonumber(x2), tonumber(y2)

calc1 = (x2 - x1) ^ 2
calc2 = (y2 - y1) ^ 2
calc3 = calc1 + calc2
raiz = calc3 ^ (1/2)

print(string.format("%.4f", raiz))