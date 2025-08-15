lista = {
    ["1"] = 2,
    ["2"] = 5,
    ["3"] = 5,
    ["4"] = 4,
    ["5"] = 5,
    ["6"] = 6,
    ["7"] = 3,
    ["8"] = 7,
    ["9"] = 6,
    ["0"] = 6,
}

quantidade = tonumber(io.read())

for i = 1, quantidade do
    ledsTotal = 0

    valor = io.read()

    for digito in valor:gmatch("%d") do
        ledsTotal = ledsTotal + lista[digito]
    end

    print(string.format("%d leds", ledsTotal))
end