infos = io.read()
vc, ec, gc, vf, ef, gf = infos:match("(%S+)%s+(%S+)%s+(%S+)%s+(%S+)%s+(%S+)%s+(%S+)")
vc, ec, gc, vf, ef, gf = tonumber(vc), tonumber(ec), tonumber(gc), tonumber(vf), tonumber(ef), tonumber(gf)

pontosCor = (vc * 3) + (ec * 1)
pontosFla = (vf * 3) + (ef * 1)

if pontosCor > pontosFla then
    print("C")
elseif pontosFla > pontosCor then
    print("F")
elseif pontosFla == pontosCor then
    if gc > gf then
        print("C")
    elseif gf > gc then
        print("F")
    elseif gc == gf then
        print("=")
    else
        print("erro")
    end
end