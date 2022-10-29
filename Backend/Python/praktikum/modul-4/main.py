# # def rekursif(n):
# #     if n == 10:
# #         return False
# #     else:
# #         print("hi")
# #         rekursif(n + 1)

# # rekursif(1)

# kata = "s*h*a"

# loop = 1
# for i in kata:
#     # if i == "*":
#     #     continue
#     # elif i == "s":
#     #     continue
#     # else:
#     #     print(i, end="")
#     print(loop)
#     loop += 1
    

# # for i in range(len(kata)):
# #     if i % 2 == 0:
# #         print(kata[i])

star = "*"
for i in range(7):
    if i % 2 == 1:
        print(star*4)
    else:
        print(star*(i + 1))