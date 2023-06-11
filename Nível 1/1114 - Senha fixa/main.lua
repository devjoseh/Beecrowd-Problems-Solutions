senha = 0

while senha ~= 2002 do 
    senha = tonumber(io.read())

    if senha == 2002 then
        print("Acesso Permitido")
    else 
        print("Senha Invalida")
    end
end