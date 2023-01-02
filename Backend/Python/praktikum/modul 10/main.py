data = []
i = 0

def tambahData():
    global i
    nama = input("Masukkan nama: ")
    for a in data:
        if nama == a[0]:
            return print("Nama tidak boleh duplikat")

    umur = input("Masukkan umur: ")
    kelamin = input("Masukkan jenis kelamin: ")
    data.append([nama, umur, kelamin])

    with open("data.txt", "a") as f:
        content = f"{data[i][0]}, {data[i][1]}, {data[i][2]}\n"
        f.write(content)
    i += 1
    # bacaData()

def hapusData():
    global i
    namaHapus = input("Masukkan nama yang ingin dihapus: ")
    for dataName in data:
        if namaHapus == dataName[0]:
            data.remove(dataName)
    i -= 1

    with open("data.txt", "w") as f:
        f.write("")

    for sisa in data:
        with open("data.txt", "a") as f:
            content = f"{sisa[0]}, {sisa[1]}, {sisa[2]}\n"
            f.write(content)

def bacaData():
    with open("data.txt", "r") as f:
        print(f.read())


def playing():
    global i
    play = True
    while play:
        print("\n1. Tambah data\n2. Hapus data\n3. Edit data")

        pick = input("Masukkan pilihan: ")

        if pick == "1":
            tambahData()
        elif pick == "2":
            hapusData()
        
        print(data, i)

playing()