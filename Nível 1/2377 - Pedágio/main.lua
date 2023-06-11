infos1 = io.read()
infos2 = io.read()

comprimento, pedagio = infos1:match("(%S+)%s+(%S+)")
custoKm, custoPedagio = infos2:match("(%S+)%s+(%S+)")

comprimento, pedagio, custoKm, custoPedagio = tonumber(comprimento), tonumber(pedagio), tonumber(custoKm), tonumber(custoPedagio)

calc = math.floor(comprimento / pedagio)
calc = calc * custoPedagio + (comprimento * custoKm)

print(calc)
