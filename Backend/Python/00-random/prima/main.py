inputUser = int(input("Masukan angka: "))

def isPrima(n):
    prima = 0

    for i in range(1, n + 1):
        if(n % i == 0):
            prima += 1
    
    if prima == 2:
        print("""{n} MERUPAKAN bilangan PRIMA""".format(n = n))
    else:
        print("""{n} BUKAN bilangan PRIMA""".format(n = n))

isPrima(inputUser)