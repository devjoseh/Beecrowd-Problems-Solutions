gritos = 0
soma = 0

while(gritos < 3) do
    texto = io.read()

    if texto == "caw caw" then
        print(soma)
        soma = 0
        gritos = gritos + 1
    else
        valores = {}

        for i = 1, #texto do
            table.insert(valores, string.sub(texto, i, i))
        end

        if valores[1] == "*" then soma = soma + 4 end
        if valores[2] == "*" then soma = soma + 2 end
        if valores[3] == "*" then soma = soma + 1 end
    end
end