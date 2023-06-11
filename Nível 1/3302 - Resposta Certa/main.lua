quantidade = tonumber(io.read())
resposta = 1

for i = 1, quantidade do 
    nota = tonumber(io.read())
    print(string.format("resposta %d: %d", resposta, nota))
    resposta = resposta + 1
end