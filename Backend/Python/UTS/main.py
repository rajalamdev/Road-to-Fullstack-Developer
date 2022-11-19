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
List = []
for i in Provinsi:
    if "Sumatera" in i or "Jawa" in i or "Sulawesi" in i or "Kalimantan" in i or "Papua" in i:
        List.append(i)

for shortp in List:
      split = shortp.split(" ")
      if shortp != "Papua":
         X1 = split[0]
         X2 = split[1]
         print(X1[:3], X2[:3], sep="")
      else:
        print(X1)  