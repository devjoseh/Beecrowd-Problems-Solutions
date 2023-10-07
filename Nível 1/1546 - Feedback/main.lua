quantia = tonumber(io.read())

for i = 1, quantia do
    feedbacks = tonumber(io.read())

    for j = 1, feedbacks do 
        categoria = tonumber(io.read())

        if(categoria == 1) then
            print("Rolien")
        elseif(categoria == 2) then 
            print("Naej")
        elseif(categoria == 3) then 
            print("Elehcim")
        elseif(categoria == 4) then 
            print("Odranoel")
        end
    end
end