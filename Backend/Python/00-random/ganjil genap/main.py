# Menginput Angka
angka = int(input("Tulis sebuah Angka: "))
 
#Jika Habis Dibagi Nol, Maka Genap
if (angka % 2) == 0:
   print("{0} adalah Bilangan Genap".format(angka))
 
#Jika Tidak Habis Dibagi Nol, Maka Ganjil
else:
   print("{0} adalah Bilangan Ganjil".format(angka))