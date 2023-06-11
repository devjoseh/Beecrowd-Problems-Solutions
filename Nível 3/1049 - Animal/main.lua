io.write("A:")
informacao1 = io.read()
io.write("B:")
informacao2 = io.read()
io.write("C:")
informacao3 = io.read()

if informacao1 == "vertebrado" then
    if informacao2 == "ave" then
        if informacao3 == "carnivoro" then
            print("aguia")
        elseif informacao3 == "onivoro" then
            print("pomba")
        else
            print("erro")
        end
    elseif informacao2 == "mamifero" then
        if informacao3 == "onivoro" then
            print("homem")
        elseif informacao3 == "herbivoro" then
            print("vaca")
        else
            print("erro")
        end
    else
        print("erro")
    end
elseif informacao1 == "invertebrado" then
    if informacao2 == "inseto" then
        if informacao3 == "hematofago" then
            print("pulga")
        elseif informacao3 == "herbivoro" then
            print("lagarta")
        else
            print("erro")
        end
    elseif informacao2 == "anelideo" then
        if informacao3 == "hematofago" then
            print("sanguessuga")
        elseif informacao3 == "onivoro" then
            print("minhoca")
        else
            print("erro")
        end
    else
        print("erro")
    end
else
    print("erro")
end