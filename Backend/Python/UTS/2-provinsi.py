# NAMA: Raj Alam
# Prodi: Teknik Informatika
# NIM: 1152200003

Provinsi = ["Nanggore Aceh Darussalam",
"Sumatera Utara",
"Sumatera Selatan",
"Sumatera Barat",
"Bengkulu",
"Riau",
"Kepulauan Riau",
"Jambi",
"Lampung",
"Bangka Belitung",
"Kalimantan Barat",
"Kalimantan Timur",
"Kalimantan Selatan",
"Kalimantan Tengah",
"Kalimantan Utara",
"Banten",
"DKI Jakarta",
"Jawa Barat",
"Jawa Tengah",
"DI Yogyakarta",
"Jawa Timur",
"Bali",
"Nusa Tenggara Timur",
"Nusa Tenggara Barat",
"Gorontalo",
"Sulawesi Barat",
"Sulawesi Tengah",
"Sulawesi Utara",
"Sulawesi Tenggara",
"Sulawesi Selatan",
"Maluku Utara",
"Maluku",
"Papua Barat",
"Papua"]

IbuKotaProv = {"Nanggore Aceh Darussalam" : "Banda Aceh",
"Sumatera Utara" : "Medan",
"Sumatera Selatan" : "Palembang",
"Sumatera Barat" : "Padang",
"Bengkulu" : "Bengkulu",
"Riau" : "Pekanbaru",
"Kepulauan Riau" : "Tanjung Pinang",
"Jambi" : "Jambi",
"Lampung" : "Bandar Lampung",
"Bangka Belitung" : "Pangkal Pinang",
"Kalimantan Barat" : "Pontianak",
"Kalimantan Timur" : "Samarinda",
"Kalimantan Selatan" : "Banjarmasin",
"Kalimantan Tengah" : "Palangkaraya",
"Kalimantan Utara" : "Bulungan",
"Banten" : "Serang",
"DKI Jakarta" : "Jakarta",
"Jawa Barat" : "Bandung",
"Jawa Tengah" : "Semarang",
"DI Yogyakarta" : "Yogyakarta",
"Jawa Timur" : "Surabaya",
"Bali" : " Denpasar",
"Nusa Tenggara Timur" : "Kupang",
"Nusa Tenggara Barat" : "Mataram",
"Gorontalo" : "Gorontalo",
"Sulawesi Barat" : "Mamuju",
"Sulawesi Tengah" : "Palu",
"Sulawesi Utara" : "Manado",
"Sulawesi Tenggara" : "Kendari",
"Sulawesi Selatan" : "Makasar",
"Maluku Utara" : "Ternate",
"Maluku" : "Ambon",
"Papua Barat" : "Manokwari",
"Papua" : "Jayapura"}


LuasProv = {"Nanggore Aceh Darussalam" : 57.96,
"Sumatera Utara" : 72.98,
"Sumatera Selatan" : 91.59,
"Sumatera Barat" : 42.01,
"Bengkulu" : 19.92,
"Riau" : 87.02,
"Kepulauan Riau" : 8.2,
"Jambi" : 50.06,
"Lampung" : 34.62,
"Bangka Belitung" : 16.42,
"Kalimantan Barat" : 147.31,
"Kalimantan Timur" : 129.07,
"Kalimantan Selatan" : 38.74,
"Kalimantan Tengah" : 153.56,
"Kalimantan Utara" : 75.47,
"Banten" : 9.67,
"DKI Jakarta" : 0.67,
"Jawa Barat" : 35.38,
"Jawa Tengah" : 32.80,
"DI Yogyakarta" : 3.13,
"Jawa Timur" : 47.80,
"Bali" : 5.78,
"Nusa Tenggara Timur" : 48.71,
"Nusa Tenggara Barat" : 18.57,
"Gorontalo" : 11.26,
"Sulawesi Barat" : 16.79,
"Sulawesi Tengah" : 61.84,
"Sulawesi Utara" : 13.89,
"Sulawesi Tenggara" : 38.07,
"Sulawesi Selatan" : 46.72,
"Maluku Utara" : 31.98,
"Maluku" : 46.91,
"Papua Barat" : 102.96,
"Papua" : 319.036}

# 1
def nomor1():
    print("No. 1")
                        
    provinsiList = []
    for prov in Provinsi:
        if "Sumatera" in prov or "Jawa" in prov or "Sulawesi" in prov or "Kalimantan" in prov or "Papua" in prov:
            provinsiList.append(prov)

    for provShort in provinsiList:
        split = provShort.split(" ")
        provinsi = split[0]
        wilayah = split[1]

        if provinsi == "Sumatera" and (wilayah == "Utara" or wilayah == "Selatan" or wilayah == "Barat"):
            provinsi = provinsi[:3]
            if wilayah == "Utara":
                wilayah = wilayah[:2]
            else:
                wilayah = wilayah[:3]
            print(provinsi, wilayah, sep="")
        elif provinsi == "Kalimantan" and (wilayah == "Barat" or wilayah == "Timur" or wilayah == "Selatan" or wilayah == "Tengah" or wilayah == "Utara"):
            provinsi = provinsi[:3]
            if wilayah == "Utara":
                wilayah = wilayah[:2]
            elif wilayah == "Tengah":
                wilayah = wilayah[:4]
            else:
                wilayah = wilayah[:3]
            print(provinsi, wilayah, sep="")
        elif provinsi == "Jawa" and (wilayah == "Barat" or wilayah == "Tengah" or wilayah == "Timur"):
            provinsi = provinsi[:2]
            if wilayah == "Tengah":
                wilayah = wilayah[:4]
            else: 
                wilayah = wilayah[:3]
            print(provinsi, wilayah, sep="")
        elif provinsi == "Sulawesi" and (wilayah == "Barat" or wilayah == "Tengah" or wilayah == "Utara" or wilayah == "Tenggara" or wilayah == "Selatan"):
            provinsi = provinsi[:3]
            if wilayah == "Tengah":
                wilayah = wilayah[:4]
            elif wilayah == "Tenggara":
                wilayah = wilayah[:]
            elif wilayah == "Utara":
                wilayah = wilayah[:2]
            else:
                wilayah = wilayah[:3]
            print(provinsi, wilayah, sep="")
        elif provinsi == "Papua" and wilayah == "Barat":
            print(provinsi, wilayah)

        if provinsi == "Papua":
            return print(provinsi, "\n")
nomor1()

# 2 
def nomor2():
    print("No. 2")
    inputUser = input("Masukkan Nama Provinsi: ")
    for provinsi, ibuKota in IbuKotaProv.items():
        if inputUser.title() == provinsi:
            print("Ibukota dari Provinsi {} adalah: {}".format(provinsi, ibuKota))
    print()
nomor2()

# 3
def nomor3():
    print("No. 3")
    inputUser = input("Masukkan Nama Ibukota: ")
    for provinsi, ibuKota in IbuKotaProv.items():
        if inputUser.title() == ibuKota:
            print("Provinsi dari Ibukota {} adalah: {}".format(ibuKota, provinsi))
    print()
nomor3()

# 4
def nomor4():
    print("No. 4")
    ibuKotaListSorted = []
    for provinsi, ibuKota in IbuKotaProv.items():
        ibuKotaListSorted.append(ibuKota)

    ibuKotaListSorted.sort(key=len)
    print(ibuKotaListSorted)
    print("Nama Ibukota Terpanjang: {}".format(ibuKotaListSorted[len(ibuKotaListSorted) - 1]))
    print("Nama Ibukota Terpendek: {}".format(ibuKotaListSorted[0]))

    print()
nomor4()

# # 5
print("No. 5")
def nomor5():
    copyLuasProv = LuasProv.copy()
    sorted_values = sorted(copyLuasProv.values())
    sorted_LuasProv = {}

    for value in sorted_values:
        for key in copyLuasProv:
            if copyLuasProv[key] == value:
                sorted_LuasProv[key] = copyLuasProv[key]

    for key, value in sorted_LuasProv.items():
        print("{}: {}".format(key, value))
nomor5()