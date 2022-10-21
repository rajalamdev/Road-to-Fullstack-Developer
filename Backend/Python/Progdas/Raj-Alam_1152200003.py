print("=========================")
print("Nama: Raj Alam\nNRP:1152200003\nProdi: Teknik Informatika")
print("=========================")


def buyTicket():
    columnList = []
    rowList = []

    try:
        total_ticket = int(input("Masukan jumlah tiket: "))
        if (total_ticket < 1) or (total_ticket > 3):
            return print("Input Error: Max 3!")
    except:
        return print("Input Error: Max 3!")

    ticket = 0
    while ticket < total_ticket:
        column = int(input("Masukan bangku kolom: "))
        row = int(input("Masukan bangku baris: "))
        columnList.append(column)
        rowList.append(row)

        for i in range(1, 10 + 1):
            for j in range(1, 15 + 1):
                if row > 15 or column > 10:
                    return print("INPUT harus dibawah (Column: 15, Row: 10)");
                elif i in columnList and j in rowList:
                    print("   ", end="")
                    columnList = []
                    rowList = []
                else:
                    print(" {j} ".format(j = j), end="")
            print()
        ticket += 1

def buy():
    buy = True
    buyTicket()

    while buy:
        buyAgain = input("Mau beli lagi? (Y/N): ")
        if buyAgain == "Y" or buyAgain == "y":
            buyTicket()
        elif buyAgain == "N" or buyAgain == "n":
            buy = False
        else:
            print("Input Error: hanya bisa input (Y/N)")
buy()

print("USER TELAH MENINGGALKAN PROGRAM")