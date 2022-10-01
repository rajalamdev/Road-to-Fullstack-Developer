inputUser = int(input("Masukkan jumlah bilangan: "))

def fibonacci(n):
    listFibonacci = []
    n1 = 0
    n2 = 1

    for i in range(n):
        listFibonacci.append(n1)
        bilanganTerakhir = n1 + n2
        n1 = n2
        n2 = bilanganTerakhir

    print("List Fibonacci:", listFibonacci)
    print("Sum Fibonacci:", sum(listFibonacci))
    
fibonacci(inputUser)