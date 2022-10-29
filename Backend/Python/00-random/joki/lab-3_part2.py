# Input tahun
tahun = int(input("Input tahun: "))

# jika tahun lebih dari sama dengan 1582
if tahun >= 1582:
    # (jika tahun habis dibagi 4 dan tahun dibagi 100 sisa lebih dari 0) atau (tahun habis dibagi 400)
    if( (tahun % 4 == 0 and tahun % 100 > 0) or (tahun % 400 == 0)):
        print("Tahun kabisat")
    else:
        print("Tahun biasa")
else:
    print("Tidak termasuk dalam kalender Gregorian")