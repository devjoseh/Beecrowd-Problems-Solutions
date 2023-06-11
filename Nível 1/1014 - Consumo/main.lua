distancia = tonumber(io.read())
combustivelGasto = tonumber(io.read())
resultado = distancia / combustivelGasto
print(string.format("%.3f km/l", resultado))