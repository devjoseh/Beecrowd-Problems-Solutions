function split(str, delimiter)
    local result = {}
    local pattern = string.format("([^%s]+)", delimiter)

    for token in string.gmatch(str, pattern) do
        table.insert(result, token)
    end

    return result
end

valor = io.read()
local parts = split(valor, "/")
x1, x2, x3 = parts[1], parts[2], parts[3]

print(string.format("%s/%s/%s", x2, x1, x3))
print(string.format("%s/%s/%s", x3, x2, x1))
print(string.format("%s-%s-%s", x1, x2, x3))