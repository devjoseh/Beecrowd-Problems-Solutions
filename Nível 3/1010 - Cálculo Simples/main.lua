info1 = io.read()
info2 = io.read()

x1,x2,x3 = info1:match("(%S+)%s+(%S+)%s+(%S+)")
y1,y2,y3 = info2:match("(%S+)%s+(%S+)%s+(%S+)")

pp1 = tonumber(x2)
pp2 = tonumber(y2)

vp1 = tonumber(x3)
vp2 = tonumber(y3)

calc1 = pp1 * vp1 
calc2 = pp2 * vp2 

resultado = calc1 + calc2 

print(string.format("VALOR A PAGAR: R$ %.2f", resultado))