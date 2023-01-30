# Penilaian Ujian Tengah Semester
# terdapat 3 soal
# dengan nilai maks masing masing soal:
# basic = 35, strukdat = 35, teori = 30

# Jika Peserta Melakukan kecurangan maka total nilai akan di kurang 50 poin,
# Jika Peserta Terlambat mengumpulkan UTS, total nilai dikurang 20 poin, dan
# Jika Format Pengumpulan soal UTS tidak sesuai, maka nilai dikurang 10 poin
dataMhs = {
    "alam": 0,
    "azura": 0,
}

def uts():
    while True:
        # di dalam data mahasiswa hanya ada 2 mahasiswa yaitu alam dan azura
        inputMhs = input("Masukkan nama mahasiswa yang ingin ditambah nilai nya: ")
        if inputMhs not in dataMhs:
            print("Mahasiswa tersebut tidak ada dalam data!")
            continue

        inputBasic = int(input("Masukkan nilai basic: "))
        inputStrukdat = int(input("Masukkan nilai strukdat: "))
        inputTeori = int(input("Masukkan nilai teori: "))

        total = inputBasic*0.35 + inputStrukdat*0.35 + inputTeori*0.3

        # misal waktu sekarang itu jam 8 pagi dan deadline nya adalah jam 10
        currentTime = int(input("Masukkan waktu saat ini: "))
        deadLine = int(input("Masukkan deadline uts: "))
        if currentTime > deadLine:
            total -= 20

        while True:
            inputCurang = input("Apakah Mahasiswa tersebut melakukan kecurangan? (Y/N)\n>>> ")
            if inputCurang == "Y" or inputCurang == "y":
                total -= 50
                break
            elif inputCurang == "N" or inputCurang == "n":
                break
            else:
                print("Input Error: hanya bisa input Y/N")

        while True:
            inputFormat = input("Apakah format file yang dikirim sesuai? (Y/N)\n>>> ")
            if inputFormat == "Y" or inputFormat == "y":
                total -= 10
                break
            elif inputFormat == "N" or inputFormat == "n":
                break
            else:
                print("Input Error: hanya bisa input Y/N")

        dataMhs[inputMhs] = total
        for key, value in dataMhs.items():
            print("="*50)
            print(key, ":", value)
            print("="*50)

        inputLagi = input("Input lagi? (Y/N)\n>>> ")
        if inputLagi == "Y" or inputLagi == "y":
            continue
        elif inputLagi == "N" or inputLagi == "n":
            break
        else:
            print("Input Error: hanya bisa input Y/N")
uts()
