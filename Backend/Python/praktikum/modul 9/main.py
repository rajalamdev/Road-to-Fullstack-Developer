def cetak_nomor(daftar):
    for nama in daftar:
        print(nama, daftar[nama])

def cari_nomor(nama, daftar):
    if nama in daftar:
        return nama, daftar[nama] 
    return None

def tambah_nomor(nama, nomor, daftar):
    daftar[nama] = nomor

def hapus_nomor(nama, daftar):
    if nama in daftar:
        del daftar[nama]

def ubah_nama(namaLama, namaBaru, daftar):
        daftar[namaBaru] = daftar[namaLama] 
        del daftar[namaLama]

def ubah_nomor(nomorLama, nomorBaru, daftar):
    daftar[nomorLama] = nomorBaru

buku_telepon = dict()

while True:
    print('\nProgram Buku Telepon')
    print("1. Tampilkan daftar\n2. Cari Nomor\n3. Tambah Nomor\n4. Hapus Nomor\n5. Ubah Nama\n6. Ubah Nomor")

    pick = input("Masukkan pilihan:\n>>> ")

    if pick == "1":
        cetak_nomor(buku_telepon)
        continue
    elif pick == "2":
        nama = input('Masukkan nama: ')
        nomor = cari_nomor(nama, buku_telepon)
        if not nomor:
            print('Nomor tidak ditemukan untuk', nama)
            continue
        else:
            print(nomor)
    elif pick == "3":
        nama = input('Masukkan nama: ')
        nomor_baru = input('Masukkan nomor telepon baru: ')
        print('Memasukkan nomor baru...')
        tambah_nomor(nama, nomor_baru, buku_telepon)
        continue
    elif pick == "4":
        nama = input('Masukkan nama: ')
        hapus_nomor(nama, buku_telepon)
    elif pick == "5":
        namaLama = input("Masukkan nama lama: ")
        if namaLama not in buku_telepon:
            print("Nomor tersebut tidak ada di daftar")
        else:
            namaBaru = input("Masukkan nama baru: ")
            ubah_nama(namaLama, namaBaru, buku_telepon)
    elif pick == "6":
        namaLama = input("Masukkan nama kontak: ")
        if namaLama not in buku_telepon:
            print("Nomor tersebut tidak ada di daftar")
        else:
            nomorBaru = input("Masukkan nomor baru: ")
            ubah_nomor(namaLama, nomorBaru, buku_telepon)
    # print('Nomor telepon', nama, 'adalah:', nomor)