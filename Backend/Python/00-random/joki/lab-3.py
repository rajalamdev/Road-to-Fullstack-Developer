print("1. Konversi mil ke kilometer\n2. Konversi kilometer ke mil")

pick = (input("pilih: "))

if pick == "1":
    mil = float(input("Masukkan angka(mil): "))
    mil_to_km = mil * 1.61
    print(mil, "mil = ", mil_to_km, "kilometer")
elif pick == "2":
    kilo = float(input("Masukkan angka(kilometer): "))
    kilo_to_mil = kilo / 1.61
    print(kilo, "kilometer = ", kilo_to_mil, "mil")
else:
    print("Hanya boleh input 1 & 2")