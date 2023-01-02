data = [["alam", "turu", "kids"], ["kidss", "turu", "kids"]]

for i in data:
    if "alam" == i[0]:
        data.remove(i)

print(data)