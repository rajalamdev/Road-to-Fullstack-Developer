def penarikan(data, user, info):
    inputPenarikan = int(input("Masukkan jumlah uang yang ingin anda tarik: "))
    if inputPenarikan > info["saldo"]:
        print("Saldo anda tidak cukup! harap isi saldo anda!\nSaldo anda: {}".format(info["saldo"]))
        return transaksiLagi(data, user, info)
    else:
        info["saldo"] -= inputPenarikan
        print("\nSaldo anda: Rp. {}\n".format(info["saldo"]))
        transaksiLagi(data, user, info)

def infoRekening(data, user, info):
    print("\nusername: {}\npin: {}\nsaldo anda: Rp. {}\n".format(user, info["pin"], info["saldo"]))
    transaksiLagi(data, user, info)

def ubahPin(data, user, info):
    ubahPin = True
    while ubahPin:
        pinLama = int(input("Masukkan pin lama:\n>>> "))    
        if pinLama == info["pin"]:
            pinBaru = int(input("Masukkan pin baru:\n>>> "))
            info["pin"] = pinBaru
            print("\nPin berhasil diganti :D\n")
            return transaksiLagi(data, user, info)
        print("\nPIN salah, silahkan coba lagi!\n")

def transfer(data, user, info):
    while True:
        inputUser = input("1. Transfer ke rekening sendiri / Isi Saldo\n2. Transfer ke rekening orang lain\n>>> ")
        if inputUser == "1":
            isiSaldo = int(input("Masukkan jumlah saldo yang ingin anda isi:\n>>> "))
            info["saldo"] += isiSaldo
            print("Saldo anda: Rp. {}".format(info["saldo"]))
            return transaksiLagi(data, user, info)
        elif inputUser == "2":
            username = input("Masukkan username yang ingin anda transfer:\n>>> ")
            if username not in data:
                print("\nUsername tersebut tidak ada di daftar ATM kami :(\n")
                continue
            if username == user:
                print("\nAnda tidak boleh melakukan transfer ke rekening anda sendiri :D\n")
                continue

            transfer = int(input("Masukkan nominal yang ingin di transfer:\n>>> "))
            if transfer > info["saldo"]:
                print("\nSaldo anda tidak cukup untuk melakukan transfer :(\nharap isi saldo anda :D\n")
                continue
            for userTf, infoTf in data.items():
                if username == userTf:
                    infoTf["saldo"] += transfer
            info["saldo"] -= transfer
            print("\nTransfer berhasil :D\n")
            return transaksiLagi(data, user, info)
        else:
            print("INPUT Salah!")

def transaksiLagi(data, user, info):
    transaksiLagi = True

    inputUser = input("Anda ingin transaksi lagi? (Y/N) ");
    while transaksiLagi:
        if inputUser == "Y" or inputUser == "y":
            return transaksi(data, user, info);
        elif inputUser == "N" or inputUser == "n":
            return terimakasih()
        else:
            print("Input salah")

def terimakasih():
    return print("Terimakasih telah bertransaksi :)")

def transaksi(data, user, info):
    print(f"\nSelamat datang {user} :)")
    print("PILIH JENIS TRANSAKSI")
    print("1. Penarikan\n2. Info Rekening\n3. Ubah PIN\n4. Transfer\n5. keluar")  
    transaksi = True

    print(f"\n{data}\n")

    while transaksi:
        pick = input("Pilih jenis transaksi (1-5): ")

        if pick == "1":
            return penarikan(data, user, info)
        elif pick == "2":
            return infoRekening(data, user, info)
        elif pick == "3":
            return ubahPin(data, user, info)
        elif pick == "4":
            return transfer(data, user, info)
        elif pick == "5":
            return print("Terimakasih!")
        else:
            print("Input Salah!")

def atm():
    data = {
        "user1": {
            "saldo": 100000,
            "pin": 12345
        },
        "user2": {
            "saldo": 250000,
            "pin": 56789
        },
        "user3": {
            "saldo": 50000,
            "pin": 10101
        }
    }

    limit = 3
    while limit >= 0:
        if limit == 0:
            print("\nKartu anda di blokir\n")
            break

        inputCard = input("Masukkan username kartu anda:\n>>> ")
        if inputCard not in data:
            print("\nKartu anda tidak ada di daftar ATM kami :(\n")
            continue

        inputPin = int(input("Masukkan Pin:\n>>> "))
        for user, info in data.items():
            for key in info:
                if inputPin == info[key] and inputCard == user:
                    return transaksi(data, user, info)
        
        limit -= 1
        print("PIN SALAH, Silahkan Coba lagi!\nBatas percobaan hingga kartu anda di blokir {}x".format(limit))
atm()




