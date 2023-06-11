function min(a, b, c)
  if a <= b and a <= c then
    return a
  elseif b <= a and b <= c then
    return b
  else
    return c
  end
end

ingredientes = io.read()
trigo, ovo, leite = ingredientes:match("(%S+)%s+(%S+)%s+(%S+)")
trigo, ovo, leite = tonumber(trigo), tonumber(ovo), tonumber(leite)
print(min(math.floor(trigo / 2), math.floor(ovo / 3), math.floor(leite / 5))) 