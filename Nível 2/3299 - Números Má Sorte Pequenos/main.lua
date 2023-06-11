valor = tonumber(io.read())
numeroMal = "13"

if string.find(tostring(valor), numeroMal) then
    print(string.format("%s es de Mala Suerte", valor))
else
    print(string.format("%s NO es de Mala Suerte", valor))
end