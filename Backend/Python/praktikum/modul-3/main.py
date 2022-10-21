# alphabet = input("Masukkan huruf: ")
# def isVocal(x):
#     if x == "a" or x == "i" or x == "u" or x == "e" or x == "o":
#         print(True)
#     else:
#         print(False)

# isVocal(alphabet)

umur = int(input("Masukkan umur: "))

if umur == 2 and umur == 3:
    print("Batita")
elif umur >= 12 and umur <= 21:
    if umur >= 17:
        print("Dewasa dan Remaja")
    else:
        print("Remaja")
elif umur >= 60:
    print("Lansia")
