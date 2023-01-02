inputLoop = int(input("Masukkan jumlah data yang ingin ditambahkan: "))
data = []

def tambahData(*args):
    data.append(list(args))
    print(data)

i = 0
while i < inputLoop:
    nama = input("Masukkan nama: ")

    if len(data) != 0:
        if nama in data[i - 1]:
            print("Data nama tidak boleh duplikat")
            continue

    umur = int(input("Masukkan umur: "))
    kelamin = input("Masukkan jenis kelamin: ")
    tambahData(nama, umur, kelamin)
    i += 1
