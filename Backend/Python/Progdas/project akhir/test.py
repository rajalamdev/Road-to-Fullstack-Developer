dataMHS = {
    "1152200030" : {
        "Nama" : "Poundra Ganteng",
        "NRP" : "1152200030",
        "Prodi" : "Informatika",
        "Mata Kuliah" : {
            "Pemograman Dasar" : "90",
            "Matematika" : "95"
        },
    },

    "1152200010" : {
        "Nama" : "Danardi Lesti Kejombang",
        "NRP" : "1152200010",
        "Prodi" : "Informatika",
        "Mata Kuliah" :{
            "Pemograman Dasar" : "70",
            "Matematika" : "65"
        }


    }
}

def login():
    username = "Admin"
    password = "Admin"

    inputUsername = input("Masukkan username :")
    inputPassword = input("Masukkan password :")

    if inputUsername == username and inputPassword == password:
        menu()
    else :
        print("Coba lagi")
        login()

def menu():
    print("1. Tambah data Mahasiswa\n2. Update Data Mahasiswa\n3. Mencari Data Mahasiswa\n4. Mata Kuliah")
    select = input("Masukan Pilihan anda :")

    if select == "1" :
        pendaftaran()
    
    elif select == "2" :
        menudataMHS()
    
    elif select == "3" :
        caridata()
    
    elif select == "4" :
        dataMatkul()



def pendaftaran() :
    inputnrp = input("Masukan NRP Anda : ")
    inputnama = input("Masukan Nama Anda :")
    inputprodi = input("Masukan Prodi Anda :")

    dataMHS[inputnrp] = {
        "Nama" : inputnama,
        "Prodi" : inputprodi,
        "NRP" : inputnrp,
        "Mata Kuliah" :{}

    }
    menu()


def menudataMHS() :
    print("1. Ubah Profile Data Mahasiswa\n2. Hapus Data Mahasiswa")
    pilihmenu = input("Pilih Yang Anda Ingin Ubah :")

    if pilihmenu == "1" :
        ubahdata()
    elif pilihmenu == "2" :
        hapusdata()

 
def hapusdata() :
    inputNrp = input("Masukan NRP Untuk Menghapus Data Mahasiswa :")

    if inputNrp not in dataMHS :
        print("NRP Tersebut Tidak Ada Dalam Data! ")
        menu()
    
    del dataMHS[inputNrp]
    menu()


def ubahdata() :
    inputNrp = input("Masukkan NRP Anda: ")
    inputNama = input("masukkan Nama baru Anda: ")

    dataMHS[inputNrp]["nama"] = inputNama
    menu()

def caridata() :
    print("1. Lihat semua data mahasiswa\n2. Lihat data mahasiswa berdasarkan nrp")
    pick = input("Masukkan pilihan: ")

    if pick == "1":
         for key,value in dataMHS.items() :
            for j in value:
                print(j, ":", value[j])
            print("="*80)
    elif pick == "2":
        cari = input("Masukan NRP Mahasiswa yang di cari :")
        if cari not in dataMHS:
            print("NRP tersebut tidak ada dalam data!")
        else:
            for key,value in dataMHS.items() :
                for j in value:
                    if key == cari :
                        print(j, ":", value[j])
                print("="*80)
    menu()


def dataMatkul() :
    print("1. Hitung Semua Data Nilai Mata Kuliah\n2. Hapus Mata Kuliah\n3. Tambah Mata Kuliah")
    select2 = input("Masukan Pilihan Anda! :")

    if select2 == "1" :
       Tambahnilai()
    elif select2 == "2" :
        hapusnilai()
    elif select2 == "3" :
        nambahMatkul()

def Tambahnilai() :
   ganti = input("Masukan NRP Anda :")
   inputmatkul = input("Masukan Mata Kuliah Anda :")
   inputhadir = input("Masukan Nilai Kehadiran :")
   inputpraktikum = input("Masukan Nilai Praktikum :")
   inputtugas = input("Masukan Nilai Tugas :")
   inputUTS = input("Masukan Nilai UTS :")
   inputUAS = input("Masukan Nilai UAS :")

   total = inputhadir*0.2 + inputpraktikum*0.1 + inputtugas*0.2 + inputUTS*0.25 + inputUAS*0.25

   predikat = ""

   if total >= 80:
        predikat += "A"
   elif total >= 70 and total < 80:
        predikat += "B"
   elif total >= 60 and total < 70:
        predikat += "C"
   elif total >= 50 and total < 60:
        predikat += "D"
   else:
        predikat += "E"

   dataMHS[ganti]["Mata Kuliah"][inputmatkul] = "".join(f"{total}({predikat})")
   menu()

def hapusnilai() :
    inputNrp = input("Masukan NRP Anda : ")
    inputMatkul = input("Masukan Mata Kuliah Yang Anda Pilih :")

    dataMHS[inputNrp]["Mata Kuliah"][inputMatkul] = ""



def nambahMatkul() :
    inputNrp = input("Masukan NRP Anda : ")
    inputMatkul = input("Masukan Mata Kuliah Yang Anda Pilih :")

    dataMHS[inputNrp]["Mata Kuliah"][inputMatkul] = ""
    menu()


login()