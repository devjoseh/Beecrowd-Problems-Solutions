valores = io.read()
x1, x2, x3 = valores:match("(%S+)%s+(%S+)%s+(%S+)")
a = tonumber(x1)
b = tonumber(x2)
c = tonumber(x3)

perimetro = a + b + c

if math.abs(b - c) < a and a < (b + c) and math.abs(a - c) < b and b < (a + c) and math.abs(a - b) < c and c < (a + b) then
    print(string.format("Perimetro = %.1f", a + b + c))
else
    area = ((a + b) / 2) * c 
    print(string.format("Area = %.1f", area))
end