nota1 = tonumber(io.read())
nota2 = tonumber(io.read())

valorA = 3.5
valorB = 7.5

media1 = valorA * nota1
media2 = valorB * nota2 

mediaFinal = (media1 + media2) / 11
print(string.format("MEDIA = %.5f", mediaFinal))