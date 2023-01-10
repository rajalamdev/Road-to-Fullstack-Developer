ListData = []
ListNilai = []
def LoginData():
    print("====== DataBase Mahasiswa =====")
    Login = input("Masukkan Account : ")
    if Login == "Admin":
        return Menupilihan()

def Menupilihan():
    print("""
1. Tambah Data Mahasiswa
2. Lihat Data Mahasiswa
3. Rename Data Mahasiswa
4. Hapus Data Mahasiswa
5. Tambah Komponen Penilaian Mahasiswa
6. Lihat Nilai Mahasiswa
7. Update Nilai Mahasiswa
8. Delete Nilai Mahasiswa""")
    InputUser = int(input("Pilih Menu : "))
    if InputUser == 1:
        return TambahdataMS()
    if InputUser == 2:
        DataMS()
        Menupilihan()
    if InputUser == 3:
        RenameData()
    if InputUser == 4:
        DeleteDataMS()
    if InputUser == 5:
        KomponenPenilaian()
    if InputUser == 6:
        LihatNilai()
    if InputUser == 7:
        HapusNilai()
def MenambahMatakul():  
    global ListData 
    Index = int(input("Mahasiswa Berapa Yang Ingin di Tambah Mata Kuliahnya? (Index 0 - 999)"))
    print("1. Matematika\n2. Agama Islam\n3. Statistika\n4. English\n5. Pemrograman Dasar")
    Matkul_MS = []
    Matkul_MS = int(input("Pilih Mata Kuliah Baru : "))
    if Matkul_MS == 1:
        Matkul_MS = "Matematika"
    if Matkul_MS == 2:
        Matkul_MS = "Agama Islam"
    if Matkul_MS == 3:
        Matkul_MS = "Statistika"
    if Matkul_MS == 4:
        Matkul_MS = "English"   
    if Matkul_MS == 5:
        Matkul_MS = "Pemrograman Dasar"
    Nilai1 = 0
    ListData[Index][4].append(Nilai1)
    ListData[Index][3].append(Matkul_MS)

    Menupilihan()

def TambahdataMS():
    global ListData
    print("""
    1. Tambah Data Mahasiswa
    2. Tambah Matakuliah Mahasiswa""")
    TambahDataInput = int(input("Pilih Opsi : "))
    if TambahDataInput == 1:
        Nama_MS = input("Nama Mahasiswa : ")
        NRP_MS = input("NRP Mahasiswa : ")
        Prodi_MS = input("Prodi Mahasiswa : ")
        Matkul_Siswa = []
        Nilai_MS = []
        DataBaru = [Nama_MS,NRP_MS,Prodi_MS,Matkul_Siswa,Nilai_MS]
        ListData.append(DataBaru)
        Menupilihan()
    elif TambahDataInput == 2:
        MenambahMatakul()
def DataMS():
    global ListData
    for peserta in ListData:
                print(f"Nama\t\t: {peserta[0]}")
                print(f"NRP\t\t: {peserta[1]}")
                print(f"Prodi\t\t: {peserta[2]}")
                print(f"MataKuliah\t: {peserta[3]}\n")
           
                
def LihatNilai():
    global ListData
    while True:
        dms = int(input("Data Mahasiswa Keberapa Yang ingin anda lihat? (berdasarkan Index 0-999) : "))
        if ListData.index(dms) in ListData:
            AA = ListData[dms][4].copy()
            bb = ListData[dms][3].copy()
            print(f"Nama\t: {ListData[dms][0]}")
            for nilai1 in bb:
                for nilai2 in AA :
                    print(f"{nilai1} = {nilai2}")
        else:
            print("Data mahasiswa tidak ada !")
            continue
def RenameData():
    DataMS()
    global ListData
    global Matkul_MS
    PilihRename = int(input("Pilih Data Mahasiswa Keberapa Yang Ingin Anda Ubah Sesuai Index 0 - 999"))
    print("Apa yang ingin anda ubah?\n1. Nama\n2. NRP\n3. Prodi\n 4. Mata kuliah")
    inputPengubah = int(input("Pilih Opsi : "))
    if inputPengubah == 1:
        NamaMSBaru = input("Masukkan Nama Mahasiswa yang baru : ")
        ListData[PilihRename][0] = NamaMSBaru
        Menupilihan()
    elif inputPengubah == 2:
        NRPMSBaru = input("Masukkan NRP Mahasiswa yang baru : ")
        ListData[PilihRename][1] = NRPMSBaru
        Menupilihan()
    elif inputPengubah == 3:
        ProdiMSBaru = input("Masukkan Prodi Mahasiswa yang baru : ")
        ListData[PilihRename][2] = ProdiMSBaru
        Menupilihan()
    elif inputPengubah == 4:
        print("Mata Kuliah apa yang ingin anda Ubah?")
        Matakuliahyangingindiubah = int(input("Ketik Index Mata Kuliah (0-99) : "))
        MatakuliahDiubah = input("Ketik Matakuliah Yang Baru : ")
        ListData[PilihRename][3][Matakuliahyangingindiubah] = MatakuliahDiubah
        Menupilihan()

def DeleteDataMS():
    print("Apa Yang Ingin Anda Hapus?\n1.Seluruh Data Mahasiswa\n2. Mata Kuliah Mahasiswa")
    HapusData = int(input("Pilih Opsi : "))
    if HapusData == 1:
        DelMS = int(input("Data Mahasiswa Keberapa Yang ingin Anda Hapus? (Index 0 - 999) : "))
        del ListData[DelMS]
        Menupilihan()
    elif HapusData == 2:
        DelMS2 = int(input("Mata Kuliah Mahasiswa Mahasiswa Keberapa Yang ingin Anda Hapus? (Index 0 - 999) : "))
        DelMS2a = int(input("Mata Kuliah Keberapa ? (Index 0-99) : "))
        del ListData[DelMS2][3][DelMS2a]
        Menupilihan()

def KomponenPenilaian():
    global ListData
    TambahKP = int(input("Data Mahasiswa Mana Yang Ingin Anda Tambahkan Penilaian? (Index 0-999) :"))
    Kpenilaian = int(input("Mata Kuliah Apa yang ingin Anda Nilai ? (index 0-999)"))
    k1 = int(input("Masukkan Nilai : (0-100)"))
    p1 = int(input("Masukkan Nilai : (0-100)"))
    t1 = int(input("Masukkan Nilai : (0-100)"))
    u1 = int(input("Masukkan Nilai : (0-100)"))
    u2 = int(input("Masukkan Nilai : (0-100)"))
    Kehadiran = k1/5
    Praktikum = p1/10
    Tugas = t1/5
    Uas = u1/4
    Uts = u2/4
    NilaiTotal = Kehadiran+Praktikum+Tugas+Uas+Uts
    NilaiTotal = str(NilaiTotal)
    if ListData[TambahKP][4][Kpenilaian] in ListData[TambahKP][4]:
        ListData[TambahKP][4][Kpenilaian] = NilaiTotal
        Menupilihan()
    else:
        print("Mata Kuliah Tidak ada, Nilai Tidak Valid !!")
        Menupilihan()
        
    # Kehadiran = k1/5
    # Praktikum = p1/10
    # Tugas = t1/5
    # Uas = u1/4
    # Uts = u2/4
    # NilaiTotal = Kehadiran+Praktikum+Tugas+Uas+Uts
    
def HapusNilai():
    while True:
        Delete_N = int(input("Pilih Data Mahasiswa Keberapa Berdasarkan Urutan Index 0 - 999 : "))
        try :
            if ListData[Delete_N] in ListData:
                Delete_Nilai = int(input("Pilih Nilai Mata Kuliah yang ingin Anda Hapus Berdasarkan Urutan Index 0-999 : "))
                try : 
                    if ListData[Delete_N][4][Delete_Nilai] in ListData[Delete_N][4][Delete_Nilai]:
                        ListData[Delete_N][4][Delete_Nilai] = '0'
                        Menupilihan()
                        break
                    else:
                        print("Nilai Mata Kuliah Anda Adalah 0 !")
                        pass
                except:
                    print("Nilai Mata Kuliah Anda Adalah 0 !")
        except:
            print("Maaf, Data Yang anda pilih Tidak Ada.")
            pass
        
LoginData()