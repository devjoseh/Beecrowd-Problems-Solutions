quantia = int(input("A: "))

# 1 = Rolien
# 2 = Naej
# 3 = Elehcim
# 4 = Odranoel

for i in range(1, quantia + 1):
    feedbacks = int(input("B: "))
    for i in range(1, feedbacks + 1):
        categoria = int(input("C: "))

        if(categoria == 1):
            print("Rolien")
        elif(categoria == 2):
            print("Naej")
        elif(categoria == 3):
            print("Elehcim")
        elif(categoria == 4):
            print("Odranoel")