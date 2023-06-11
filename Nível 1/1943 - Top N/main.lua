valor = tonumber(io.read())

if valor == 1 then
    print("Top 1")
elseif valor <= 3 then
    print("Top 3")
elseif valor <= 5 then
    print("Top 5")
elseif valor <= 10 then
    print("Top 10")
elseif valor <= 25 then
    print("Top 25")
elseif valor <= 50 then
    print("Top 50")
elseif valor <= 100 then
    print("Top 100")
else
    print("Error")
end