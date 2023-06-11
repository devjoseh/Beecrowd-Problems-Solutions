function replace(str, find, replace)
    return (string.gsub(str, find, replace))
end

valor = io.read()
local novaString = replace(valor, "-", ".")
x1, x2, x3, x4 = novaString:match("(%S+)%.(%S+)%.(%S+)%.(%S+)")

print(x1)
print(x2)
print(x3)
print(x4)