import datetime

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

matkulPick = {
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
            "matkul": "Agama",
            "sks": 2
        },
        "5": {
            "matkul": "Pemrograman Berorientasi Objek",
            "sks": 4
        },
        "6": {
            "matkul": "Machine Learning",
            "sks": 4
        },
        "7": {
            "matkul": "English",
            "sks": 3
        },
        "8": {
            "matkul": "Data Mining",
            "sks": 4
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
            "matkul": "Agama",
            "sks": 2
        },
        "5": {
            "matkul": "Rangkaian Listrik",
            "sks": 4
        },
        "6": {
            "matkul": "Sistem Digital",
            "sks": 3
        }
    },
    "Industri": {
        "1": {
            "matkul": "Kalkulus",
            "sks": 4
        },
        "2": {
            "matkul": "Otomasi",
            "sks": 3 
        },
        "3": {
            "matkul": "Agama",
            "sks": 2
        },
        "4": {
            "matkul": "Data Science",
            "sks": 3
        },
        "5": {
            "matkul": "English",
            "sks": 4
        }
    },
    "Mesin": {
        "1": {
            "matkul": "Kalkulus",
            "sks": 4
        },
        "2": {
            "matkul": "Agama",
            "sks": 2
        },
        "3": {
            "matkul": "Kinematika",
            "sks": 3
        }, 
        "4": {
            "matkul": "Fisika",
            "sks": 3
        }, 
        "5": {
            "matkul": "Kimia",
            "sks": 2
        }
    }
}

matkulList = {
    "Informatika": ["Kalkulus", "Pemrograman Dasar", "Statistika", "Pemrograman Berorientasi Objek", "Agama", "Machine Learning", "English", "Data Mining"],
    "Elektro": ["Kalkulus", "Pemrograman Dasar", "Statistika", "Agama", "Rangkaian Listrik", "Sistem Digital"],
    "Industri": ["Kalkulus", "Pemrograman Dasar", "Agama", "Data Science", "English"],
    "Mesin": ["Kalkulus", "Agama", "Kinematika", "Fisika", "Kimia"]
}

def createDataMhs():
    print("="*10, "SELAMAT DATANG DI MENU PENDAFTARAN", "="*10)
    print("Silahkan isi data dibawah ini\n")

    nrp = ""
    kelas = ""
    prodiRegist = ""

    getCurrentYear = str(datetime.date.today().year)[2:]

    while True:
        nama = input("Nama: ").title()
        if nama == "":
            print("\n>>> Nama tidak boleh kosong :D\n")
            continue
        break

    while True:
        selectKelas = input("Pilih Kelas (Reguler / Pararel): ").title()
        if selectKelas not in prodiList:
            print("\n>>> Kelas tersebut tidak ada dalam daftar!\n")
            continue
        kelas += selectKelas
        break

    while True:
        print()
        print("="*10, f"Daftar Program Studi {kelas}" ,"="*10)
        for kelasList, item in prodiList.items():
            if kelas == kelasList:
                for i in item["prodi"].keys():
                    print(i)

        selectProdi = input("Pilih Program Studi: ").title()
        if selectProdi.title() not in prodiList[kelas]["prodi"]:
            print("\n>>> Program studi tersebut tidak ada dalam daftar kampus kami :(")
            continue
        else:
            prodiRegist += selectProdi

        for kelasList, item in prodiList.items():
            if kelas == kelasList:
                nrp += "".join(f"{item['prodi'][prodiRegist]['noProdi']}{getCurrentYear}{item['noKelas']}{item['prodi'][prodiRegist]['id']}")
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
        for id, item in matkulPick.items():
            if id == prodiRegist:
                for key, value in item.items():
                    if value["matkul"] in dataMhs[nrp]["matkul"]:
                       print(key, ":",value["matkul"], "(terdaftar!)")
                       continue
                    print(key, ":",value["matkul"], f"({value['sks']}sks)")

        matkul = input("Pilih matkul: ")

        if matkul not in matkulPick[prodiRegist]:
            print("\n>>> Matkul tersebut tidak ada di dalam daftar!")
            continue

        for id, item in matkulPick.items():
            if id == prodiRegist and dataMhs[nrp]["nama"] == nama:
                for key, value in item.items():
                    if matkul == key:
                        if value["matkul"] in dataMhs[nrp]["matkul"]:
                            print("\n>>> Matkul tersebut sudah ada di dalam daftar!\n")
                        else:
                            dataMhs[nrp]["matkul"].update({value["matkul"]: ""})
                            dataMhs[nrp]["sks"] += value["sks"]
                            print(f"\n>>> Mata Kuliah {matkulPick[prodiRegist][matkul]['matkul']} Berhasil ditambahkan\n")

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
    print()
    print(" "*33,"DAFTAR MAHASISWA"," "*33)
    print("="*80)
    for id, data in dataMhs.items():
        for key in data:
            if key == excepts:
                continue
            print(key, ": ", data[key])
        print("="*80)
    print()

def renameDataMhs():
    while True:
        print("1. Rename nama mahasiswa\n2. Rename mata kuliah")

        select = input("\nMasukkan pilihan: ")
        if select == "1":
            showDataMhs("matkul")

            inputNrp = input("Masukkan nrp mahasiswa: ")
            if inputNrp not in dataMhs:
               print("\n>>> NRP tersebut tidak ada dalam daftar\n")
               continue

            while True:
                renameNama = input("Masukkan nama mahasiswa baru: ").title()
                if renameNama == "":
                    print("\n>>> Nama tidak boleh kosong!\n")
                    continue
                break

            dataMhs[inputNrp]["nama"] = renameNama
            print("\n>>> Berhasil Rename Mahasiswa!\n")
            break
        elif select == "2":
            showDataMhs()

            inputNrp = input("Masukkan nrp mahasiswa: ")
            if inputNrp not in dataMhs:
               print("\n>>> NRP tersebut tidak ada dalam daftar\n")
               continue

            while True:   
                matkulLama = input("Matkul apa yang ingin di rename?: ").title()

                if matkulLama not in dataMhs[inputNrp]["matkul"]:
                    print("\n>>> Matkul tersebut tidak ada dalam daftar\n")
                    continue
                else:
                    break
            
            while True:
                currentProdi = dataMhs[inputNrp]["prodi"]
                print()
                print("="*10, f"Daftar Matkul Prodi {currentProdi}", "="*10)
                for id, item in matkulPick.items():
                    if id == currentProdi:
                        for key, value in item.items():
                            if value["matkul"] in dataMhs[inputNrp]["matkul"]:
                                print(value["matkul"], "(terdaftar!)")
                                continue
                            print(value["matkul"])

                renameMatkul = input("Masukkan nama matkul baru: ").title()

                if renameMatkul in dataMhs[inputNrp]["matkul"]:
                    print("\n>>> Nama matkul tidak boleh sama dengan matkul lama / tidak duplikat dengan matkul lain!\n")
                    continue

                if renameMatkul not in matkulList[currentProdi]:
                    print("\n>>> Anda hanya boleh rename matkul sesuai daftar matkul!\n")
                    continue

                dataMhs[inputNrp]["matkul"][renameMatkul] = dataMhs[inputNrp]["matkul"].pop(matkulLama)
                break
            
            print("\n>>> Berhasil Rename Matkul!\n")
            break       
        else:
            print("\n>>> Input Salah!\n")
            
def deleteDataMhs():
    while True:
        print("1. Hapus data mahasiswa\n2. Hapus mata kuliah")

        select = input("\nMasukkan pilihan: ")

        if select == "1":
            showDataMhs("matkul")

            inputNrp = input("Masukkan nrp mahasiswa: ")
            if inputNrp not in dataMhs:
                print("\n>>> NRP tersebut tidak ada dalam daftar\n")
                continue

            del dataMhs[inputNrp]
            print("\n>>> Berhasil Delete data Mahasiswa!\n")
            break
        elif select == "2":
            showDataMhs()

            inputNrp = input("Masukkan nrp mahasiswa: ")
            if inputNrp not in dataMhs:
               print("\n>>> NRP tersebut tidak ada dalam daftar\n")
               continue

            while True:
                matkulLama = input("Matkul apa yang ingin dihapus?: ").title()
                if matkulLama not in dataMhs[inputNrp]["matkul"]:
                    print("\n>>> Matkul tersebut tidak ada dalam daftar\n")
                    continue
                else:
                    break

            del dataMhs[inputNrp]["matkul"][matkulLama]
            print("\n>>> Berhasil Delete Matkul!\n")
            break
        else:
            print("\n>>> Input Salah!\n")

def tambahNilaiDanUpdateDataMhs(excepts = ""):
    while True:
        showDataMhs()

        inputNrp = input("Masukkan nrp mahasiswa: ")
        if inputNrp not in dataMhs:
            print("\n>>> NRP tersebut tidak ada dalam daftar\n")
            continue

        while True:
            matkul = input("Masukkan matkul: ").title()
            if matkul not in dataMhs[inputNrp]["matkul"]:
                print("\n>>> Matkul tersebut tidak ada dalam daftar\n")
                continue
            break

        while True:    
            kehadiran = input(f"{excepts} Nilai Kehadiran: ")
            if kehadiran.isdigit():
                kehadiran = int(kehadiran)
                if kehadiran > 100:
                    print("\n>>> Input tidak boleh lebih dari 100!")
                    continue
                break
            print("\n>>> Input hanya boleh angka dan tidak boleh kurang dari 0!\n")
            continue
        while True:    
            praktikum = input(f"{excepts} Nilai praktikum: ")
            if praktikum.isdigit():
                praktikum = int(praktikum)
                if praktikum > 100:
                    print("\n>>> Input tidak boleh lebih dari 100!\n")
                    continue
                break
            print("\n>>> Input hanya boleh angka dan tidak boleh kurang dari 0!\n")
            continue
        while True:    
            tugas = input(f"{excepts} Nilai tugas: ")
            if tugas.isdigit():
                tugas = int(tugas)
                if tugas > 100:
                    print("\n>>> Input tidak boleh lebih dari 100!")
                    continue
                break
            print("\n>>> Input hanya boleh angka dan tidak boleh kurang dari 0!\n")
            continue
        while True:    
            uts = input(f"{excepts} Nilai uts: ")
            if uts.isdigit():
                uts = int(uts)
                if uts > 100:
                    print("\n>>> Input tidak boleh lebih dari 100!")
                    continue
                break
            print("\n>>> Input hanya boleh angka dan tidak boleh kurang dari 0!\n")
            continue
        while True:    
            uas = input(f"{excepts} Nilai uas: ")
            if uas.isdigit():
                uas = int(uas)
                if uas > 100:
                    print("\n>>> Input tidak boleh lebih dari 100!")
                    continue
                break
            print("\n>>> Input hanya boleh angka dan tidak boleh kurang dari 0!\n")
            continue

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
        if excepts == "":
            print("\n>>> Nilah berhasil di tambahkan!\n")
        else:
            print("\n>>> Nilai berhasil di update")
        break

def lihatNilaiMhs():
    for id, data in dataMhs.items():
        for key in data:
            if key == "kelas":
                continue
            print(key, ": ", data[key])
        print("="*50)

def deleteNilaiMhs():
    while True:
        showDataMhs()

        inputNrp = input("Masukkan nrp mahasiswa: ")
        if inputNrp not in dataMhs:
            print("\n>>> NRP tersebut tidak ada dalam daftar\n")
            continue
        
        while True:
            matkul = input("Masukkan nilai matkul yang ingin dihapus: ").title()
            if matkul not in dataMhs[inputNrp]["matkul"]:
                print("\n>>> Matkul tersebut tidak ada dalam daftar\n")
                continue
            break

        dataMhs[inputNrp]["matkul"][matkul] = ""
        print(f"\n>>> Nilai matkul {matkul} berhasil dihapus\n")
        break


def menu():
    while True:
        print("="*20,"MENU","="*20)
        print("1. Tambah data mahasiswa dan mata kuliah\n2. Lihat Data Mahasiswa dan mata kuliah\n3. Rename data mahasiswa dan mata kuliah\n4. Hapus data mahasiswa dan mata kuliah\n5. Tambah nilai pada matkul\n6. Lihat nilai mahasiswa\n7. Update nilai mahasiswa\n8. Delete nilai mahasiswa\n9. Logout")
    
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
            tambahNilaiDanUpdateDataMhs()
        elif select == "6":
            lihatNilaiMhs()
        elif select == "7":
            tambahNilaiDanUpdateDataMhs("update")
        elif select == "8":
            deleteNilaiMhs()
        elif select == "9":
            return print("\n>>> Logout...")
        else:
            print("\n>>> Harap memasukan input yang ada didaftar!")
def login():
    username = "Admin";
    password = "Admin";

    limit = 5

    while True:
        if limit == 0:
            return print(">>> Kesempatan sudah habis! silahkan coba lain waktu")

        print("="*25, "Login", "="*25)
        inputUsername = input("Username: ")
        if inputUsername == "":
            print(">>> Username tidak boleh kosong!")
            continue

        while True:
            inputPassword = input("Password: ")
            if inputPassword == "":
                print("\n>>> Password tidak boleh kosong!\n")
                continue
            break
    
        if inputUsername == username and inputPassword == password:
            print("\n>>> Login Berhasil!\n")
            menu()
        else:
            limit -= 1
            print(f"\n>>> Username / Password Salah! Sisa kesempatan {limit}\n")        
login()