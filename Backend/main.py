
username = "Admin";
password = "Admin";

inputUsername = input("Username: ")
inputPassword = input("Password: ")

dataMhs = {
    "1152200003": {
        "nama": "alam",
        "nrp": "1152200003",
        "prodi": "Informatika",
        "matkul": {
            "Kalkulus": "80",
            "Statistika": "85"
        } 
    },
}

prodiList = {
    "Reguler": {
        "noKelas": "000",
        "prodi": {
            "Informatika": {
                "id": 1,
                "noProdi": "115",
            },
            "Elektro": {
                "id": 1,
                "noProdi": "112",
            },
            "Industri": {
                "id": 1,
                "noProdi": "110",   
            },
            "Mesin": {
                "id": 1,
                "noProdi": "108"
            }
        }
    }, 
    "Paralel": {
        "noKelas": "111",
        "prodi": {
            "Informatika": {
                "id": 1,
                "noProdi": "115",
            },
            "Elektro": {
                "id": 1,
                "noProdi": "112",
            },
        }
    }
}

matkulList = {
    "Informatika": {
        "1": {
            "matkul": "Kalkulus",
            "sks": 4
        },
        "2": {
            "matkul": "Pemrograman Dasar",
            "sks": 4 
        },
        "3": {
            "matkul": "Statistika",
            "sks": 3
        },
        "4": {
            "matkul": "Agama Islam",
            "sks": 2
        },
        "5": {
            "matkul": "Pemrograman Berorientasi Objek",
            "sks": 5
        }
    },
    "Elektro": {
        "1": {
            "matkul": "Kalkulus",
            "sks": 4
        },
        "2": {
            "matkul": "Pemrograman Dasar",
            "sks": 4 
        },
        "3": {
            "matkul": "Statistika",
            "sks": 3
        },
        "4": {
            "matkul": "Agama Islam",
            "sks": 2
        },
    },
    "Industri": {
        "1": {
            "matkul": "Kalkulus",
            "sks": 4
        },
        "2": {
            "matkul": "Pemrograman Dasar",
            "sks": 4 
        },
        "3": {
            "matkul": "Agama Islam",
            "sks": 2
        },
    },
    "Mesin": {
        "1": {
            "matkul": "Kalkulus",
            "sks": 4
        },
        "2": {
            "matkul": "Agama Islam",
            "sks": 2
        },
    }
}

def createDataMhs():
    print("="*10, "SELAMAT DATANG DI MENU PENDAFTARAN", "="*10)
    print("Silahkan isi data dibawah ini\n")

    nrp = ""
    kelas = ""
    prodiRegist = ""

    while True:
        nama = input("Nama: ")
        if nama == "":
            print("\n>>> Nama tidak boleh kosong :D\n")
            continue
        break

    while True:
        selectKelas = input("Pilih Kelas (Reguler / Pararel): ")
        if selectKelas.title() not in prodiList:
            print("\n>>> Kelas tersebut tidak ada dalam daftar!\n")
            continue
        kelas += selectKelas.title()
        break

    while True:
        print()
        print("="*10, f"Daftar Program Studi {kelas}" ,"="*10)
        for kelasList, item in prodiList.items():
            if kelas == kelasList:
                for i in item["prodi"].keys():
                    print(i)

        selectProdi = input("Pilih Program Studi: ")
        if selectProdi.title() not in prodiList[kelas]["prodi"]:
            print("\n>>> Program studi tersebut tidak ada dalam daftar kampus kami :(")
            continue
        else:
            prodiRegist += selectProdi.title()

        for kelasList, item in prodiList.items():
            if kelas == kelasList:
                nrp += "".join(f"{item['prodi'][prodiRegist.title()]['noProdi']}{item['noKelas']}{item['prodi'][prodiRegist.title()]['id']}")
        break

    dataMhs[nrp] = {
        "nama": nama,
        "nrp": str(nrp),
        "prodi": prodiRegist,
        "matkul": {},
        "kelas": kelas,
        "sks": 0
    } 

    matkulLoopInput = True
    while matkulLoopInput:
        print()
        print("="*10, f"Daftar Matkul Prodi {prodiRegist}", "="*10)
        for id, item in matkulList.items():
            if id == prodiRegist:
                for key, value in item.items():
                    print(key, ":",value["matkul"], f"({value['sks']}sks)")

        matkul = input("Pilih matkul: ")

        if matkul not in matkulList[prodiRegist]:
            print("\n>>> Matkul tersebut tidak ada di dalam daftar!")
            continue

        for id, item in matkulList.items():
            if id == prodiRegist and dataMhs[nrp]["nama"] == nama:
                for key, value in item.items():
                    if matkul == key:
                        if value["matkul"] in dataMhs[nrp]["matkul"]:
                            print("\n>>> Matkul tersebut sudah ada di dalam daftar!\n")
                        else:
                            dataMhs[nrp]["matkul"].update({value["matkul"]: ""})
                            dataMhs[nrp]["sks"] += value["sks"]
                            print(f"\n>>> Mata Kuliah {matkulList[prodiRegist][matkul]['matkul']} Berhasil ditambahkan\n")

        while True:
            tambahMatkul = input("Ingin tambah matkul lagi? (Y/N): ")

            if tambahMatkul == "Y" or tambahMatkul == "y":
                break
            elif tambahMatkul == "N" or tambahMatkul == "n":
                prodiList[kelas]["prodi"][prodiRegist]["id"] += 1
                print("\n>>> Mahasiswa berhasil di daftarkan!\n")
                return
            else:
                print("\n>>> Input Salah\n")
                continue
    
def showDataMhs(excepts=""):
    print(" "*25,"DAFTAR MAHASISWA"," "*25)
    print("="*50)
    for id, data in dataMhs.items():
        for key in data:
            if key == excepts:
                continue
            print(key, ": ", data[key])
        print("="*50)

def renameDataMhs():
    while True:
        print("1. Rename nama mahasiswa\n2. Rename mata kuliah")

        select = input("\nMasukkan pilihan: ")
        if select == "1":
            showDataMhs("matkul")

            inputNrp = input("Masukkan nrp mahasiswa: ")
            if inputNrp not in dataMhs:
               print("NRP tersebut tidak ada dalam daftar")
               continue
            else: 
                renameNama = input("Masukkan nama mahasiswa baru: ")
                dataMhs[inputNrp]["nama"] = renameNama
                break
        elif select == "2":
            showDataMhs()

            inputNrp = input("Masukkan nrp mahasiswa: ")
            if inputNrp not in dataMhs:
               print("NRP tersebut tidak ada dalam daftar")
               continue

            while True:   
                # for id, item in dataMhs.items():
                #     if id == inputNrp:
                #         print(item)

                matkulLama = input("Matkul apa yang ingin di rename?: ").title()

                if matkulLama not in dataMhs[inputNrp]["matkul"]:
                    print("Matkul tersebut tidak ada dalam daftar")
                    continue
                else:
                    break
            
            while True:
                renameMatkul = input("Masukkan nama matkul baru: ").title()
                currentProdi = dataMhs[inputNrp]["prodi"]
                for prodi, item in matkulList.items():
                    if prodi == currentProdi:
                        print(item)
                
        else:
            print("Input Salah!")
            
def deleteDataMhs():
    while True:
        print("1. Hapus data mahasiswa\n2. Hapus mata kuliah")

        select = input("\nMasukkan pilihan: ")

        if select == "1":
            showDataMhs("matkul")

            inputNrp = input("Masukkan nrp mahasiswa: ")
            if inputNrp not in dataMhs:
                print("NRP tersebut tidak ada dalam daftar")
                continue

            del dataMhs[inputNrp]
            break
        elif select == "2":
            showDataMhs()

            inputNrp = input("Masukkan nrp mahasiswa: ")
            if inputNrp not in dataMhs:
               print("NRP tersebut tidak ada dalam daftar")
               continue

            while True:
                matkulLama = input("Matkul apa yang ingin dihapus?: ")
                if matkulLama not in dataMhs[inputNrp]["matkul"]:
                    print("Matkul tersebut tidak ada dalam daftar")
                    continue
                else:
                    break

            del dataMhs[inputNrp]["matkul"][matkulLama]
            break
        else:
            print("Input Salah!")

def tambahNilai():
    while True:
        showDataMhs()

        inputNrp = input("Masukkan nrp mahasiswa: ")
        if inputNrp not in dataMhs:
            print("NRP tersebut tidak ada dalam daftar")
            continue

        matkul = input("Masukkan matkul: ")
        if matkul not in dataMhs[inputNrp]["matkul"]:
            print("Matkul tersebut tidak ada dalam daftar")
            continue

        kehadiran = int(input("Nilai Kehadiran: "))
        praktikum = int(input("Nilai praktikum: "))
        tugas = int(input("Nilai tugass: "))
        uts = int(input("Nilai uts: "))
        uas = int(input("Nilai uas: "))

        totalNilai = kehadiran*0.2 + praktikum*0.1 + tugas*0.2 + uts*0.25 + uas*0.25
        predikat = ""

        if totalNilai >= 80:
            predikat += "A"
        elif totalNilai >= 70 and totalNilai < 80:
            predikat += "B"
        elif totalNilai >= 60 and totalNilai < 70:
            predikat += "C"
        elif totalNilai >= 50 and totalNilai < 60:
            predikat += "D"
        else:
            predikat += "E"

        dataMhs[inputNrp]["matkul"][matkul] = "".join(f"{totalNilai}({predikat})")
        break

def lihatNilaiMhs():
    for id, data in dataMhs.items():
        for key in data:
            if key == "kelas":
                continue
            print(key, ": ", data[key])
        print("="*50)

def loginAsAdmin():
    while True:
        print("="*20,"MENU","="*20)
        print("1. Tambah data mahasiswa dan mata kuliah\n2. Lihat Data Mahasiswa dan mata kuliah\n3. Rename data mahasiswa dan mata kuliah\n4. Hapus data mahasiswa dan mata kuliah\n5. Tambah nilai pada matkul\n6. Lihat nilai mahasiswa\n7. Update nilai mahasiswa\n8. Delete nilai mahasiswa")
    
        select = input("\nMasukkan pilihan: ")
    
        if select == "1":
            createDataMhs()  
        elif select == "2":
            showDataMhs()     
        elif select == "3":
            renameDataMhs() 
        elif select == "4":
            deleteDataMhs()
        elif select == "5":
            tambahNilai()
        elif select == "6":
            lihatNilaiMhs()

if inputUsername == username and inputPassword == password:
    loginAsAdmin()
