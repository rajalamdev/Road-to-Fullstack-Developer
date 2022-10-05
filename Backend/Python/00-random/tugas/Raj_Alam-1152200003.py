print("===========================================")
print("Nama: Raj Alam\nNRP: 1152200003\nProdi: Teknik Informatika")
print("===========================================")

inputError = "INPUT ERROR: Anda hanya bisa meng-Input"

def triangleGenerator(n):
    if n < 0:
        print("ERROR: Input tidak boleh kurang dari 0")
    elif n == 0:
        print("ERROR: Input tidak boleh 0")
    else:
        for i in range(0, n + 1):
            for j in range(0, i):
                print("*", end="")
            print()

def fibonacciGenerator(n):
    listFibonacci = []

    for i in range(0, n): 
        if (len(listFibonacci) == 0):
            listFibonacci.append(0)
        elif (len(listFibonacci) == 1):
            listFibonacci.append(1)
        else:
            listFibonacci.append(listFibonacci[i - 2] + listFibonacci[i - 1])

    print("List Fibonacci:", listFibonacci)
    print("Total sum", sum(listFibonacci))

def isPrima(n):
    prima = 0

    for i in range(1, n + 1):
        if(n % i == 0):
            prima += 1
    
    if prima == 2:
        print("""{n} MERUPAKAN bilangan PRIMA""".format(n = n))
    else:
        print("""{n} BUKAN bilangan PRIMA""".format(n = n))

def pascalGenerator(n):
    for i in range(1, n + 1):
        for space in range(1, n - i + 1):
            print(" ",end="")
        for j in range(0, i):
            if j == 0 or i == 0:
                one = 1
            else:
                one = one * (i - j) // j
            print(one, end = " ")
        print()
    
def userSelect():
    print("\n1. Segitiga Bintang\n2. Fibonacci\n3. Prima\n4. Pascal\n")
    try:
        pick = int(input("Masukan nomor program yang ingin dijalankan: "))
        if (pick < 1) or (pick > 4):
            return print("{inputError} (1, 2, 3, 4)!".format(inputError = inputError))
    except:
        return print("{inputError} (1, 2, 3, 4)!".format(inputError = inputError))

    try:
        inputUser = int(input("Masukkan jumlah/bilangan: "))
    except:
        return print("{inputError} ANGKA!".format(inputError = inputError))

    if pick == 1:
        return triangleGenerator(inputUser)
    elif pick == 2:
        return fibonacciGenerator(inputUser)
    elif pick == 3:
        return isPrima(inputUser)
    elif pick == 4:
        return pascalGenerator(inputUser)
    else:
        return print("{inputError} (1, 2, 3, 4)!".format(inputError = inputError))

def playing():
    play = True

    userSelect()
    while play:
        print()
        playAgain = input("Ulangin Program? Y/N ")
        if playAgain == "Y" or playAgain == "y": 
            userSelect()
        elif playAgain == "N" or playAgain == "n": 
            play = False
        else:
            print("{inputError} Y/N!".format(inputError = inputError))
playing()

print("\nUSER TELAH MENINGGALKAN PROGRAM!")