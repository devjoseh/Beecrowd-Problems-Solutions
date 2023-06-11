valor = tonumber(io.read())
resposta = io.read()
x1, x2, x3, x4, x5 = resposta:match("(%S+)%s+(%S+)%s+(%S+)%s+(%S+)%s+(%S+)")
x1, x2, x3, x4, x5 = tonumber(x1), tonumber(x2), tonumber(x3), tonumber(x4), tonumber(x5)
competidores = 0

if x1 == valor then 
    competidores = competidores + 1
end

if x2 == valor then 
    competidores = competidores + 1
end

if x3 == valor then 
    competidores = competidores + 1
end

if x4 == valor then 
    competidores = competidores + 1
end

if x5 == valor then 
    competidores = competidores + 1
end

print(competidores)