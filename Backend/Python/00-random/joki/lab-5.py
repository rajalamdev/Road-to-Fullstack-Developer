angka = int(input("Masukkan angka: "))

def isPrime(num):
    totalFaktor = 0

    for faktor in range(1, num + 1):
        if num % faktor == 0:
            totalFaktor += 1

    if totalFaktor == 2:
        return True
    else:
        return False

print(isPrime(angka))

# list bilangan prima
for prima in range(1, angka):
    if isPrime(prima + 1):
        print(prima + 1, end=" ")
