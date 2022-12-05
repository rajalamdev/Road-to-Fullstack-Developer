print("\nPILIH JENIS TRANSAKSI")
print("1. Penarikan\n2. Info Rekening\n3. Ubah PIN\n4. Transfer\n5. keluar")    

pin = 12345
saldo = 100000

def transaksi_1(saldo):
    inputPenarikan = int(input("Masukkan jumlah uang yang ingin anda tarik: "))
    saldo -= inputPenarikan
    print("Saldo anda sisa: {}".format(saldo))


def transaksi_2():
    print("saldo anda adalah: {}".format(saldo))

def transaksi_3():
    print("y")

def transaksi_4():
    print("y")

def transaksi():
    transaksi = True

    while transaksi:
        pick = input("Pilih jenis transaksi (1-5): ")

        if pick == "1":
            return transaksi_1(saldo)
        elif pick == "2":
            return transaksi_2(saldo)
        elif pick == "3":
            return transaksi_3(saldo)
        elif pick == "4":
            return transaksi_4(saldo)
        elif pick == "5":
            return print("Terimakasih!")
        else:
            print("Input Salah!")


def atm():
    limit = 1
    while limit <= 3:
        inputPin = int(input("Masukkan Pin: "))

        if limit == 3:
            print("Kartu anda di blokir")
            break

        if inputPin == pin:
            return transaksi()
        else:
            print("PIN SALAH")
        limit += 1
atm()




