valor = tonumber(io.read())
kms = 0

for i = 1, valor do 
    intervaloTempo = io.read()
    x1, x2 = intervaloTempo:match("(%S+)%s+(%S+)")
    x1, x2 = tonumber(x1), tonumber(x2)
    formula = x2 * x1
    kms = kms + formula
end

print(kms)