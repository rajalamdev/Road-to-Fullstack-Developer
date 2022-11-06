# from secrets import choice
# import string
 
# def generator_password(n):
#     if n >= 8:
#         karakter = list(string.ascii_letters + string.digits)
#         symbol = string.punctuation
#         password = []
    
#         for s in symbol:
#             karakter.append(s)

#         for loop in range(n):
#             x = choice(karakter)
#             password.append(x)

#         for i, value in enumerate(password):
#             print(i, value, end="")

#         return password
#     else:
#         return ""

# print("Program pembuat password")
# n = int(input("Masukkan Jumlah karakter password: "))
# print("Password anda: ", generator_password(n))

def tampilKeranjang(keranjang):
    print(keranjang)

def tambahKeranjang(keranjang):
    inputUser = input("masukkan item yang ingin ditambahkan: ")
    keranjang.append(inputUser)

def hapusKeranjang(keranjang):
    inputUser = input("masukkan item yang ingin dihapus: ")
    for i, value in enumerate(keranjang):
        if inputUser == value:
            del keranjang[i]

keranjang = []

play = True
while play:
    print("Silahkan pilih dari pilihan dibawah ini")
    print("1. Cetak dalam keranjang\n2. Tambah item dari keranjang\n3. Hapus item dari keranjang\n4. Keluar")
    print()

    select = input("Masukkan pilihan menu: ")

    if select == "1":
        tampilKeranjang(keranjang)
    elif select == "2":
        tambahKeranjang(keranjang)
    elif select == "3":
        hapusKeranjang(keranjang)
    elif select == "4":
        play = False
        print("User telah meninggalkan program!")
    else:
        print("Input tidak sesuai pilihan\n")
