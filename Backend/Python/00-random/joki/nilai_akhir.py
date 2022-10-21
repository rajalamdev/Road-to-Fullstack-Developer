tugas = int(input("masukkan nilai tugas: "))
uts = int(input("masukkan nilai tugas: "))
uas = int(input("masukkan nilai tugas: "))

nilai_akhir = (tugas*0.3) + (uts*0.3) + (uas*0.4)

if nilai_akhir < 45:
    print("Nilai akhir:", nilai_akhir, "E", "Anda dinyatakan tidak lulus")
elif nilai_akhir >= 45 and nilai_akhir < 56:
    print("Nilai akhir:", nilai_akhir, "D", "Anda dinyatakan tidak lulus")
elif nilai_akhir >= 56 and nilai_akhir < 68:
    print("Nilai akhir:", nilai_akhir, "C", "Anda dinyatakan lulus")
elif nilai_akhir >= 68 and nilai_akhir < 80:
    print("Nilai akhir:", nilai_akhir, "B", "Anda dinyatakan lulus")
elif nilai_akhir >= 80 and nilai_akhir <= 100:
    print("Nilai akhir:", nilai_akhir, "A", "Anda dinyatakan lulus")

