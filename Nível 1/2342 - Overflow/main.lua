maxRepresentacao = tonumber(io.read())
n1, operador, n2 = io.read():match("(%S+)%s+(%S+)%s+(%S+)")
n1 = tonumber(n1)
n2 = tonumber(n2)
calc = 0

if operador == "*" then
    calc = n1 * n2 
else
    calc = n1 + n2
end

if calc > maxRepresentacao then 
    print("OVERFLOW")
else
    print("OK")
end