valores = io.read()
entregue, dataFinal = valores:match("(%S+)%s+(%S+)")

calc = dataFinal - entregue

if calc >= 3 then
    print("Muito bem! Apresenta antes do Natal!")
elseif calc < 0 then
    print("Eu odeio a professora!")
else
    dataFinal = dataFinal + 2
    print("Parece o trabalho do meu filho!")

    if dataFinal <= 24 then
        print("TCC Apresentado!")
    else
        print("Fail! Entao eh nataaaaal!")
    end
end