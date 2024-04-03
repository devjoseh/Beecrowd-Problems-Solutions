pecas = tonumber(io.read())
l1, l2 = io.read():match("(%S+)%s+(%S+)")
s1, s2 = io.read():match("(%S+)%s+(%S+)")

l1, l2 = tonumber(l1), tonumber(l2)
s1, s2 = tonumber(s1), tonumber(s2)

lavar = pecas >= l1 and pecas <= l2 
secar = pecas >= s1 and pecas <= s2

if lavar and secar then
    print("possivel")
else
    print("impossivel")
end