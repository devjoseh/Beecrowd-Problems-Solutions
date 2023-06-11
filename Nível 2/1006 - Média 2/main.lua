nota1 = tonumber(io.read())
nota2 = tonumber(io.read())
nota3 = tonumber(io.read())

valorA = 2
valorB = 3
valorC = 5

media1 = valorA * nota1
media2 = valorB * nota2
media3 = valorC * nota3

mediaFinal = (media1 + media2 + media3) / 10
print(string.format("MEDIA = %.1f", mediaFinal))