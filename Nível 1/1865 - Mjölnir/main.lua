valor = tonumber(io.read())

for i = 1, valor do 
    texto = io.read()
    x1, x2 = texto:match("(%S+)%s+(%S+)")
    x2 = tonumber(x2)
    x1 = string.lower(x1)

    if x1 == "thor" then
        print("Y")
    else
        print("N")
    end
end