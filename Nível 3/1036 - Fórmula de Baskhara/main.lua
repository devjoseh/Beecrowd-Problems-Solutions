valor = io.read()
x1,x2,x3 = valor:match("(%S+)%s+(%S+)%s+(%S+)")
x1,x2,x3 = tonumber(x1),tonumber(x2),tonumber(x3)

if x1 == 0.0 or (x2 ^ 2 - 4 * x1 * x3) < 0 then
    print("Impossivel calcular")
else 
    valor1 = (- x2 + (x2 ^ 2 - 4 * x1 * x3) ^ (1/2)) / (2 * x1)
    valor2 = (- x2 - (x2 ^ 2 - 4 * x1 * x3) ^ (1/2)) / (2 * x1)
    print(string.format("R1 = %.5f", valor1))
    print(string.format("R2 = %.5f", valor2))
end